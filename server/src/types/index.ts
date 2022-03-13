export interface defaultErrorDto {
  status: number;
  message: string;
}

export interface responseDto {
  status: number;
  data: googleAPIResponseDto;
}

interface googleAPIResponseDto {
  items: {
    volumeInfo: {
      title: string;
      authors: string[];
      description: string;
      imageLinks: {
        thumbnail?: string;
      };
      categories: string[];
      averageRating?: number;
      ratingsCount?: number;
    };
  }[];
  totalItems: number;
}
