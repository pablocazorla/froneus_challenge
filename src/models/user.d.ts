export interface User {
  id: string;
  name: string;
  last_name: string;
  phone: string;
}

export interface UserList {
  elementsTotal: number;
  data: User[];
}
