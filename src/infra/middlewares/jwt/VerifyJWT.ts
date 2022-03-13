import { NextFunction, Request, Response } from 'express';

import { AuthorizeResponseType } from '../../../types/response/AuthorizeResponseType';
import { JWT, IJWT } from '../../jwt/JWT';

export async function VerifyJWT(request: Request, response: Response, next: NextFunction) {
  const authorizationHeader = request.headers['authorization'];
  if (!authorizationHeader) {
    response.sendStatus(403);
    return;
  }

  const token = extractToken(authorizationHeader);

  try {
    const { data } = await verify(token);
    request['user'] = data;
    next();
  } catch (error) {
    return response.json().status(403);
  }
};

function extractToken(authorizationToken: string) {
  const bearer = authorizationToken.split(' ');
  return bearer[1];
}

async function verify(token: string, jwtModule: IJWT = JWT()): Promise<AuthorizeResponseType> {
  return new Promise((resolve, error) => {
    jwtModule.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        error({ status: false });
      } else {
        const data = { id: decoded['id'] };
        resolve({ status: true, data });
      };
    })
  });
}
