import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import {provideHttpClient} from '@angular/common/http';
import { NotebookRepository } from './repository/notebook.repository';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import {FirebaseNotebookRepository} from './data/repository/firebase-notebook.repository';
//import {LocalStorageNotebookRepository} from './data/repository/localstorage-notebook.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: NotebookRepository, useClass: FirebaseNotebookRepository },
    providePrimeNG({
      theme: {
        preset: Aura
      },

    })
  ]
};
