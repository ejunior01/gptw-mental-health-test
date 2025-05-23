export interface PaginationResponse<T> {
  page: number;
  pages: number;
  size: number;
  total: number;
  nextPage: number;
  prevPage: number;
  data: Array<T> | [];
}
