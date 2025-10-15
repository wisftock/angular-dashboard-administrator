import { Observable } from 'rxjs';
import { UserRepositoryPort } from '../../domain/repository/user.respository';
import {
  CreateUserRequest,
  UpdateUserRequest,
  User,
} from '../../domain/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserUseCase {
  constructor(private repository: UserRepositoryPort) {}

  findAll(): Observable<User[]> {
    return this.repository.findAll();
  }

  findById(id: string): Observable<User> {
    return this.repository.findById(id);
  }

  create(user: CreateUserRequest): Observable<User> {
    return this.repository.create(user);
  }

  update(user: UpdateUserRequest): Observable<User> {
    return this.repository.update(user);
  }

  delete(id: string): Observable<void> {
    return this.repository.delete(id);
  }
}
