import { Injectable } from '@angular/core';
import { UserRepositoryPort } from '../../domain/repository/user.respository';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserApiResponse } from '../interface/user.interface';
import {
  CreateUserRequest,
  UpdateUserRequest,
  User,
} from '../../domain/user.model';
import { UserMappers } from '../mapper/user-mapper';

@Injectable({
  providedIn: 'root',
})
export class UserApiAdapter implements UserRepositoryPort {
  private readonly URL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http
      .get<UserApiResponse[]>(this.URL)
      .pipe(map((users) => users.map(UserMappers.mapToUser)));
  }

  findById(id: string): Observable<User> {
    return this.http
      .get<UserApiResponse>(`${this.URL}/${id}`)
      .pipe(map((user) => UserMappers.mapToUser(user)));
  }

  create(user: CreateUserRequest): Observable<User> {
    return this.http
      .post<UserApiResponse>(this.URL, user)
      .pipe(map((user) => UserMappers.mapToUser(user)));
  }

  update(user: UpdateUserRequest): Observable<User> {
    return this.http
      .put<UserApiResponse>(`${this.URL}/${user.id}`, user)
      .pipe(map((user) => UserMappers.mapToUser(user)));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }
}
