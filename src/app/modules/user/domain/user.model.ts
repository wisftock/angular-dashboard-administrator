export interface User {
  id: string;
  name: string;
  lastname: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface CreateUserRequest {
  name: string;
  email: string;
  role: UserRole;
}

export interface UpdateUserRequest {
  id: string;
  name?: string;
  lastname?: string;
  role?: UserRole;
}
