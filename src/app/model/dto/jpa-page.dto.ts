export interface JpaPageDto<T> {
  totalElements: number;
  content: T[];
}
