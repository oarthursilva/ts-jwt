import { httpServerConfig } from "./config/http/HttpServerConfig";

const server = (httpServerConfigModule = httpServerConfig) => {
  const PORT = '3000';

  return {
    start() {
      httpServerConfigModule
        .config()
        .listen(PORT, () => console.log(`server running on port ${PORT}`));
    }
  }
}

// start application
server().start();
