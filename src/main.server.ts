export { AppServerModule as default } from './app/app.module.server';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { renderModule } from '@angular/platform-server';
import { AppComponent } from './app/app.component'; // Adjust the import path if needed

if (environment.production) {
  enableProdMode();
}

export { renderModule };
export { AppComponent };
