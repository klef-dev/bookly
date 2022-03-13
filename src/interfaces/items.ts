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
  };
}

export interface RatingsParams {
  ratingsCount?: number;
}

export interface PaginationParams {
  next: boolean;
  prev: boolean;
  pageNum: number;
}

// COMPONENT PROPS
export interface ItemsProps {
  items: ItemParams[];
  // pagination: PaginationParams;
}

export interface ItemProps {
  item: ItemParams;
}

export interface SearchProps {
  onSearch: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface FilterProps {
  updateItems: ({
    items,
    totalItems,
  }: {
    items: ItemParams[];
    totalItems: number;
  }) => {
    items: ItemParams[];
    totalItems: number;
  };
}

export interface PaginationProps {
  totalRecords: number;
  pageLimit: number;
  pageNeighbours: number;
  onPageChanged: () => {};
}
