import { JWT, IJWT } from '../infra/jwt/JWT';
import { AuthenticateResponseType } from '../types/response/AuthenticateResponseType';

export interface IOAuthService {
  handleAuthenticate: () => Promise<AuthenticateResponseType>;
}

export class OAuthService implements IOAuthService {
  private jwt: IJWT;

  constructor(jwtSignModule = JWT()) {
    this.jwt = jwtSignModule;
  }

  async handleAuthenticate(): Promise<AuthenticateResponseType> {
    const id = 1;
    const token = this.jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    });

    return { status: Boolean(token) ? true : false, token }
  }
}
