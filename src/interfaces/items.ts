export interface ItemParams {
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    categories: string[];
    averageRating?: number;
    ratingsCount?: number;
    pageCount?: number;
    publisher?: string;
    publishedDate?: string;
  };
}

export interface RatingsParams {
  averageRating?: number;
}

export interface PaginationParams {
  totalPages: number;
  currentPage: number;
  next: boolean;
  prev: boolean;
}

// COMPONENT PROPS
export interface ItemsProps {
  items: ItemParams[];
  pagination: PaginationParams;
  mutateAsync: ({
    q,
    limit,
    offset,
  }: {
    q?: string;
    limit?: number;
    offset?: number;
  }) => Promise<any>;
  isLoading: boolean;
}

export interface ItemProps {
  item: ItemParams;
}

export interface SearchProps {
  onSearch: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface FilterProps {
  handleFiltering: (e: React.FormEvent<HTMLSelectElement>) => void;
}

export interface PaginationProps {
  totalRecords: number;
  pageLimit: number;
  pageNeighbours: number;
  onPageChanged: () => {};
}
