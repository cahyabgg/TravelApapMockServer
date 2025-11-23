import jwt from 'jsonwebtoken';
import { DecodedJWT } from './interface';

const SECRET = "mySuperSecretKeyForMockServer123";

export function decodeJwt (token : string) : DecodedJWT {
    try {
        return jwt.verify(token,SECRET) as DecodedJWT;
    } catch (error) {
        throw new Error('JWT payload is missing required custom claims (id or role).');
    }
}