import { Request, Response } from 'express';
import { OAuthService } from '../services/OAuthService';

export class OAuthController {
  private oAuthService: OAuthService;

  constructor(oAuthService = new OAuthService()) {
    this.oAuthService = oAuthService;
  }

  async auth(request: Request, response: Response) {
    const data = await this.oAuthService.handleAuthenticate();
    return response.json(data);
  }

  async getUserData(request: Request, response: Response) {
    const user = request['user'];
    return response.json({ user }).status(200);
  }

}
