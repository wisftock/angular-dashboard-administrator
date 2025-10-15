import { Observable } from 'rxjs';
import { CreateUserRequest, UpdateUserRequest, User } from '../user.model';

export abstract class UserRepositoryPort {
  abstract findAll(): Observable<User[]>;
  abstract findById(id: string): Observable<User>;
  abstract create(user: CreateUserRequest): Observable<User>;
  abstract update(user: UpdateUserRequest): Observable<User>;
  abstract delete(id: string): Observable<void>;
}
