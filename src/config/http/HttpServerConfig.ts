import { HTTPServer } from '../../infra/server/HttpServer';
import { environmentConfig } from '../environment/EnvironmentConfig';
import { routes } from '../../routes';

const httpServerConfig = {
  config() {
    environmentConfig.config();
    return HTTPServer().setup({ routes });
  }
}

export { httpServerConfig };
