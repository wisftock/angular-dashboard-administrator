import { Component, inject, signal } from '@angular/core';
import { User } from '../domain/user.model';

import { ButtonModule } from 'primeng/button';
import { UserUseCase } from '../application/use-cases/user.use-case';
import { UIButton } from '../../../ui';

@Component({
  selector: 'app-user-ui',
  imports: [ButtonModule, UIButton],
  templateUrl: './user-ui.html',
  styleUrl: './user-ui.css',
})
export class UserUi {
  #users = signal<User[]>([]);
  #loading = signal<boolean>(false);
  #error = signal<string | null>(null);

  #userService = inject(UserUseCase);

  loadUsers() {
    this.#loading.set(true);
    this.#error.set(null);

    this.#userService.findAll().subscribe({
      next: (users) => {
        this.#users.set(users);
        this.#loading.set(false);
      },
      error: (err) => {
        this.#error.set(err.message);
      },
      complete: () => {
        this.#loading.set(false);
      },
    });
  }
}
