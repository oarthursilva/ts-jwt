import { OAuthController } from "./controllers/OAuthController";
import { AppRouter } from "./infra/middlewares/http/HTTPMiddleware";
import { VerifyJWT } from "./infra/middlewares/jwt/VerifyJWT";

const routes = AppRouter();

const oAuthController = new OAuthController();

routes.post('/oauth/token', (request, response) => oAuthController.auth(request, response));
routes.get('/api/user', VerifyJWT, (request, response) => oAuthController.getUserData(request, response));

export { routes };
