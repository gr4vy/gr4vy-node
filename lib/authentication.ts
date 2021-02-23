// using CJS import because ESM for Jose is broken
const { default: SignJWT } = require('jose/jwt/sign');
const { default: calculateThumbprint } = require('jose/jwk/thumbprint');
const { default: fromKeyLike } = require('jose/jwk/from_key_like');

import crypto from 'crypto';
import uuid from 'uuid';

const pkg = require('./package.json');
const ISSUER = `Gr4vy SDK ${pkg.version} - Node ${process.version}`;

class Authentication {
    key: crypto.KeyObject;
    keyId: string | null;

    constructor(key: string) {
        this.key = crypto.createPrivateKey(key);
        this.keyId = null;
        this.getKeyId(key).then((keyId) => (this.keyId = keyId));
    }

    public async getSignedJWT(claims: any = {}): Promise<string> {
        const header = {
            typ: 'JWT',
            alg: 'ES512',
            kid: this.keyId,
        };

        return new SignJWT(claims)
            .setProtectedHeader(header)
            .setIssuer(ISSUER)
            .setNotBefore('0s')
            .setExpirationTime('1m')
            .setJti(uuid.v4())
            .sign(this.key);
    }

    private async getKeyId(key: string): Promise<string> {
        const jwk = await fromKeyLike(key);
        return calculateThumbprint(jwk);
    }
}

export default Authentication;
