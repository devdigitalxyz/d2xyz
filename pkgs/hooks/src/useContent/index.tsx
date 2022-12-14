import React, {
  type Dispatch,
  type SetStateAction,
  useState,
  useMemo,
  createContext,
  useContext,
  type ReactNode,
} from 'react';

export type ContentOrderByType = 'date' | 'title';
export type ContentOrderByOpts = 'asc' | 'desc';

export type ContentItem = {
  title: string;
  description: string;
  tags: string[];
  img: string;
  date: Date;
};

export type ContentItemRecord = {
  [x: string]: ContentItem;
};

export interface ContentContextType {
  items: ContentItemRecord;
  itemsDisplay: ContentItem[];
  tags: string[];
  orderBy: ContentOrderByType;
  orderDir: ContentOrderByOpts;
  search: string;
  filters: string[];
  filtersSet: Dispatch<SetStateAction<string[]>>;
  orderBySet: Dispatch<SetStateAction<ContentOrderByType>>;
  orderDirSet: Dispatch<SetStateAction<ContentOrderByOpts>>;
  searchSet: Dispatch<SetStateAction<string>>;
}

const init: ContentContextType = {
  items: {},
  itemsDisplay: [],
  tags: [],
  orderBy: 'date',
  orderDir: 'desc',
  search: '',
  filters: [],
  filtersSet: () => undefined,
  orderBySet: () => undefined,
  orderDirSet: () => undefined,
  searchSet: () => undefined,
};

export const ContentContext = createContext<ContentContextType>(init);

export interface ContentProviderProps {
  children?: ReactNode;
  items?: ContentContextType['items'];
  tags?: ContentContextType['tags'];
}

export const ContentProvider = ({
  children,
  items = init.items,
  tags = init.tags,
}: ContentProviderProps) => {
  // states
  const [filters, filtersSet] = useState<ContentContextType['filters']>(
    init.filters,
  );
  const [orderBy, orderBySet] = useState<ContentContextType['orderBy']>(
    init.orderBy,
  );
  const [orderDir, orderDirSet] = useState<ContentContextType['orderDir']>(
    init.orderDir,
  );
  const [search, searchSet] = useState<ContentContextType['search']>(
    init.search,
  );

  const itemsDisplay = useMemo<ContentContextType['itemsDisplay']>(() => {
    // filter items
    if (filters.length) {
      return Object.values(items).filter((item) => {
        return filters.every((filter) => {
          return item.tags.includes(filter);
        });
      });
    }

    // order items
    if (orderBy === 'date') {
      return Object.values(items).sort((a, b) => {
        return orderDir === 'desc'
          ? b.date.getTime() - a.date.getTime()
          : a.date.getTime() - b.date.getTime();
      });
    }

    if (orderBy === 'title') {
      return Object.values(items).sort((a, b) => {
        return orderDir === 'desc'
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title);
      });
    }

    // search items
    if (search.length) {
      return Object.values(items).filter((item) => {
        return (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    return Object.values(items);
  }, [items, filters, orderBy, orderDir, search]);

  const ctx: ContentContextType = useMemo(
    () => ({
      items,
      itemsDisplay,
      filters,
      filtersSet,
      orderBy,
      orderBySet,
      orderDir,
      orderDirSet,
      search,
      searchSet,
      tags,
    }),
    [
      items,
      itemsDisplay,
      filters,
      filtersSet,
      orderBy,
      orderBySet,
      orderDir,
      orderDirSet,
      search,
      searchSet,
      tags,
    ],
  );

  return (
    <ContentContext.Provider value={ctx}>{children}</ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
