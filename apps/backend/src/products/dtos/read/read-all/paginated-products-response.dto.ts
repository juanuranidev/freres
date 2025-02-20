import { ProductReadAllResponseDto } from './products.read-all-response.dto';

export interface PaginationInfo {
    total: number;           // Total number of items
    offset: number;          // Current offset
    limit: number;          // Items per page
    currentPage: number;    // Current page number
    totalPages: number;     // Total number of pages
    hasNextPage: boolean;   // Whether there is a next page
    hasPrevPage: boolean;   // Whether there is a previous page
}

export interface PaginatedProductsResponseDto {
    data: ProductReadAllResponseDto[];
    pagination: PaginationInfo;
} 