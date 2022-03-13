import express, { Router } from 'express';
import cors from 'cors';

export const HTTPMiddleware = (expressModule = express, corsModule = cors) => ({
  setup({ routes }) {
    return expressModule()
      .use(expressModule.json())
      .use(expressModule.urlencoded({ extended: false }))
      .use(corsModule())
      .use(routes);
  }
});

export const AppRouter = (routerModule = Router()) => routerModule;
