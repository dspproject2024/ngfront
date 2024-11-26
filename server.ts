import 'zone.js/dist/zone-node';
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
// import AppServerModule from './src/main.server';
import { AppServerModule } from './src/main.server';

const server = express();
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const commonEngine = new CommonEngine();

// Express settings
server.set('view engine', 'html');
server.set('views', browserDistFolder);

// Serve static files
server.get('*.*', express.static(browserDistFolder, { maxAge: '1y' }));

// Use Angular SSR engine for all other routes
server.get('*', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap: AppServerModule,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

// Start the server
const PORT = process.env['PORT'] || 4000; // Use ['PORT'] for index signature
server.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
