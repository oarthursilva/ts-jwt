import { createServer } from 'http';
import { HTTPMiddleware } from '../middlewares/http/HTTPMiddleware';

export const HTTPServer = (httpMiddlewareModule = HTTPMiddleware(), createServerModule = createServer) => ({
  setup({ routes }) {
    const http = httpMiddlewareModule.setup({ routes });
    return createServerModule(http);
  }
});
