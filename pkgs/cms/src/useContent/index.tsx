import React, {
  type Dispatch,
  type SetStateAction,
  useState,
  useMemo,
  createContext,
  useContext,
  useCallback,
  type ReactNode,
} from 'react';
import { useLocalState } from '@d2xyz/hooks';
import type { CMSDocument, CMSCollection, CMSTag } from '../types';

export type ContentSortByType = 'date' | 'title';
export type ContentSortByOpts = 'asc' | 'desc';
export type ContentViewOpts = 'items' | 'collections';

export type CMSConfig = {
  projectId?: string;
  dataset?: string;
  apiVersion?: string;
  useCdn?: boolean;
};

export interface ContentContextType {
  cfg?: CMSConfig;
  content: CMSCollection[];
  display: CMSDocument[];
  tags: {
    [x: string]: string[];
  };
  sortBy: ContentSortByType;
  sortDir: ContentSortByOpts;
  search: string;
  filters: string[];
  filtersSet: Dispatch<SetStateAction<string[]>>;
  sortBySet: Dispatch<SetStateAction<ContentSortByType>>;
  sortDirSet: Dispatch<SetStateAction<ContentSortByOpts>>;
  searchSet: Dispatch<SetStateAction<string>>;
  viewOpt: ContentViewOpts;
  viewOptSet: React.Dispatch<React.SetStateAction<ContentViewOpts>>;
  lsid?: string;
  expanded: boolean;
  toggleExpanded: () => void;
  onlyItems?: boolean;
}

const init: ContentContextType = {
  content: [],
  display: [],
  tags: {
    tags: [],
  },
  sortBy: 'date',
  sortDir: 'desc',
  search: '',
  filters: [],
  filtersSet: () => undefined,
  sortBySet: () => undefined,
  sortDirSet: () => undefined,
  searchSet: () => undefined,
  viewOpt: 'items',
  viewOptSet: () => undefined,
  lsid: 'd2xyz-cms',
  expanded: true,
  toggleExpanded: () => undefined,
};

export const ContentContext = createContext<ContentContextType>(init);

export interface ContentProviderProps {
  children?: ReactNode;
  content?: ContentContextType['content'];
  tags?: ContentContextType['tags'];
  lsid?: string;
  onlyItems?: boolean;
  defaultViewOpts?: ContentViewOpts;
}

export const ContentProvider = ({
  children,
  content = init.content,
  tags = init.tags,
  lsid = init.lsid,
  onlyItems,
  defaultViewOpts,
}: ContentProviderProps) => {
  // states
  const [viewOpt, viewOptSet] = useLocalState<ContentViewOpts>(
    onlyItems ? 'items' : defaultViewOpts || init.viewOpt,
    `${lsid}-opt`,
  );
  const [filters, filtersSet] = useLocalState<ContentContextType['filters']>(
    init.filters,
    `${lsid}-filters`,
  );
  const [sortBy, sortBySet] = useLocalState<ContentContextType['sortBy']>(
    init.sortBy,
    `${lsid}-sortby`,
  );
  const [sortDir, sortDirSet] = useLocalState<ContentContextType['sortDir']>(
    init.sortDir,
    `${lsid}-sortdir`,
  );
  const [search, searchSet] = useState<ContentContextType['search']>(
    init.search,
  );

  const [expanded, expandedSet] = useLocalState<boolean>(
    init.expanded,
    `${lsid}-showfilters`,
  );

  const toggleExpanded = useCallback(() => {
    expandedSet((t) => !t);
  }, [expandedSet]);

  const display = useMemo<ContentContextType['display']>(() => {
    let filtered: ContentContextType['display'] = [];

    if (viewOpt === 'collections') {
      filtered = content;
    }
    if (viewOpt === 'items') {
      filtered = content.reduce(
        (acc: CMSDocument[], collection: CMSCollection) => {
          const result: CMSDocument[] = [...acc];
          if (collection.items) {
            result.push(...collection.items);
          }
          return result;
        },
        [],
      );
    }

    // filter items
    if (filters.length) {
      filtered = filtered.filter((item) => {
        return filters.every((filter) => {
          const targets = item.tags.map((tag: CMSTag) => tag.name);
          return targets.includes(filter);
        });
      });
    }

    // order items
    if (sortBy === 'date') {
      filtered = filtered.sort((a, b) => {
        return sortDir === 'desc'
          ? new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          : new Date(a.publishedAt).getTime() -
              new Date(b.publishedAt).getTime();
      });
    }

    if (sortBy === 'title') {
      filtered = filtered.sort((a, b) => {
        return sortDir === 'desc'
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title);
      });
    }

    // search items
    if (search.length) {
      filtered = filtered.filter((item) => {
        return (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description?.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    return filtered;
  }, [content, sortBy, sortDir, filters, search, viewOpt]);

  const ctx: ContentContextType = useMemo(
    () => ({
      content,
      display,
      filters,
      filtersSet,
      sortBy,
      sortBySet,
      sortDir,
      sortDirSet,
      search,
      searchSet,
      tags,
      viewOpt,
      viewOptSet,
      expanded,
      toggleExpanded,
      onlyItems,
    }),
    [
      content,
      display,
      filters,
      filtersSet,
      sortBy,
      sortBySet,
      sortDir,
      sortDirSet,
      search,
      searchSet,
      tags,
      viewOpt,
      viewOptSet,
      expanded,
      toggleExpanded,
      onlyItems,
    ],
  );

  return (
    <ContentContext.Provider value={ctx}>{children}</ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);

export interface CMSConfigProps {
  cfg: CMSConfig;
  children?: ReactNode;
}

export const CMSConfigContext = createContext<CMSConfig>({});

export const CMSConfigProvider = ({ children, cfg }: CMSConfigProps) => {
  return (
    <CMSConfigContext.Provider value={cfg}>
      {children}
    </CMSConfigContext.Provider>
  );
};

export const useCMSConfig = () => useContext(CMSConfigContext);
