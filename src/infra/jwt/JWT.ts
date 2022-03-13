import jwt, { GetPublicKeyOrSecret, Jwt, JwtPayload, Secret, VerifyCallback, VerifyOptions } from 'jsonwebtoken';

interface IJWT {
  sign: any;
  verify?: { (token: string, secretOrPublicKey: Secret, options: VerifyOptions & { complete: true; }): Jwt; (token: string, secretOrPublicKey: Secret, options?: VerifyOptions & { complete?: false; }): string | JwtPayload; (token: string, secretOrPublicKey: Secret, options?: VerifyOptions): string | Jwt | JwtPayload; (token: string, secretOrPublicKey: Secret | GetPublicKeyOrSecret, callback?: VerifyCallback<string | JwtPayload>): void; (token: string, secretOrPublicKey: Secret | GetPublicKeyOrSecret, options: VerifyOptions & { complete: true; }, callback?: VerifyCallback<Jwt>): void; (token: string, secretOrPublicKey: Secret | GetPublicKeyOrSecret, options?: VerifyOptions & { complete?: false; }, callback?: VerifyCallback<string | JwtPayload>): void; (token: string, secretOrPublicKey: Secret | GetPublicKeyOrSecret, options?: VerifyOptions, callback?: VerifyCallback<string | Jwt | JwtPayload>): void; };
}

const JWT = (jwtModule = jwt) => ({
  sign: jwtModule.sign,
  verify: jwtModule.verify
})

export { IJWT, JWT };
