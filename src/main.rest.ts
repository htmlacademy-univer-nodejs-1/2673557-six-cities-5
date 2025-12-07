import 'reflect-metadata';
import { Component } from './shared/types/index.js';
import { Application } from './rest/index.js';
import { createApplicationContainer } from './rest/rest.container.js';

async function bootstrap() {
  const container = createApplicationContainer();
  const application = container.get<Application>(Component.Application);
  await application.init();
}

bootstrap();
