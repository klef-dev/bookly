export interface ItemParams {
  title: string;
  image: string;
  ratings: number;
  pages: number;
  year: string;
  publisher: string;
  authors: string;
  categories: string;
  description: string;
}

export interface RatingsParams {
  ratings: number;
}

export interface PaginationParams {
  next: boolean;
  prev: boolean;
  pageNum: number;
}

// COMPONENT PROPS
export interface ItemsProps {
  items: ItemParams[];
  pagination: PaginationParams;
}

export interface ItemProps {
  item: ItemParams;
}

export interface FilterProps {
  initialItems: ItemParams[];
  updateItems: (data: ItemParams[]) => ItemParams[];
}

export interface PaginationProps {
  totalRecords: number;
  pageLimit: number;
  pageNeighbours: number;
  onPageChanged: () => {};
}
