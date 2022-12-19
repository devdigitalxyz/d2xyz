import React, {
  type Dispatch,
  type SetStateAction,
  useState,
  useMemo,
  createContext,
  useContext,
  type ReactNode,
} from 'react';
import { useLocalState } from 'hooks';

export type ContentSortByType = 'date' | 'title' | 'position';
export type ContentSortByOpts = 'asc' | 'desc';
export type ContentViewOpts = 'items' | 'collections';

export type ContentItem = {
  title: string;
  description?: string;
  tags: string[];
  img: string;
  date: Date;
  slug?: string;
  premium?: boolean;
  position?: number;
  featured?: boolean;
};

export type ContentCollection = {
  title: string;
  description?: string;
  tags: string[];
  img: string;
  date: Date;
  slug?: string;
  premium?: boolean;
  position?: number;
  featured?: boolean;
  items: ContentItem[];
};

export type ContentRecord = {
  [x: string]: ContentCollection;
};

export interface ContentContextType {
  content: ContentRecord;
  display: ContentItem[] | ContentCollection[];
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
}

const init: ContentContextType = {
  content: {},
  display: [],
  tags: { tags: [] },
  sortBy: 'position',
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
};

export const ContentContext = createContext<ContentContextType>(init);

export interface ContentProviderProps {
  children?: ReactNode;
  content?: ContentContextType['content'];
  tags?: ContentContextType['tags'];
  lsid?: string;
}

export const ContentProvider = ({
  children,
  content = init.content,
  tags = init.tags,
  lsid = init.lsid,
}: ContentProviderProps) => {
  // states
  const [viewOpt, viewOptSet] = useLocalState<ContentViewOpts>(
    init.viewOpt,
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

  const display = useMemo<ContentContextType['display']>(() => {
    let filtered: ContentContextType['display'] = [];

    if (viewOpt === 'collections') {
      filtered = Object.values(content);
    }
    if (viewOpt === 'items') {
      filtered = Object.values(content).reduce(
        (acc: ContentItem[], collection: ContentCollection) => {
          const result: ContentItem[] = [...acc, ...collection.items];
          return result;
        },
        [],
      );
    }

    // filter items
    if (filters.length) {
      filtered = filtered.filter((item) => {
        return filters.every((filter) => {
          return item.tags.includes(filter);
        });
      });
    }

    // order items
    if (sortBy === 'position') {
      filtered = filtered.sort((a, b) => {
        return sortDir === 'desc'
          ? (b?.position || 0) - (a?.position || 0)
          : (a?.position || 0) - (b?.position || 0);
      });
    }

    if (sortBy === 'date') {
      filtered = filtered.sort((a, b) => {
        return sortDir === 'desc'
          ? b.date.getTime() - a.date.getTime()
          : a.date.getTime() - b.date.getTime();
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
    ],
  );

  return (
    <ContentContext.Provider value={ctx}>{children}</ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
