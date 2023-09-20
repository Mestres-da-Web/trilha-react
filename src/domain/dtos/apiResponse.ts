export interface IApiResponse<T> {
  results: T;
  limit: number | null;
  page: number | null;
  total: number | null;
}
