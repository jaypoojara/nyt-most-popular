export interface Responses<T> {
  status: string;
  results: T[];
  num_results: number;
}
