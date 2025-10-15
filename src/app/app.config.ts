import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { MyPreset } from './mypreset';
import { UserRepositoryPort } from './modules/user/domain/repository/user.respository';
import { UserApiAdapter } from './modules/user/infrastructure/repository/user-api.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withDebugTracing()),
    {
      provide: UserRepositoryPort,
      useValue: UserApiAdapter,
    },
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
};
