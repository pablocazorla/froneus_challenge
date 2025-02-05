export interface FiltersType {
  [index: string]: string | number | undefined;
  page?: number;
  elementsPerPage?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  keyword?: string;
}

export interface FilterUser {
  [index: string]: string | number | undefined;
  page?: number;
  elementsPerPage?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  keyword?: string;
}
