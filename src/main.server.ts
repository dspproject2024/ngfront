import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppServerModule } from './app/app.server.module';

// Activez le mode production si l'environnement est en production
if (environment.production) {
  enableProdMode();
}

// Exportez uniquement les éléments nécessaires
export { AppServerModule };
