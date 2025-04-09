export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Auth {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}