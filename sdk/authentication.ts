// using CJS import because ESM for Jose is broken
const { default: SignJWT } = require('jose/jwt/sign');
const { default: calculateThumbprint } = require('jose/jwk/thumbprint');
const { default: fromKeyLike } = require('jose/jwk/from_key_like');

import crypto from 'crypto';
import { v4 as uuid } from 'uuid';
import { version } from './package';

const issuer = `Gr4vy SDK ${version} - Node ${process.version}`;

class Authentication {
    key: crypto.KeyObject;
    keyId: string | null;

    constructor(key: string) {
        this.key = crypto.createPrivateKey(key);
        this.keyId = null;
    }

    public async getSignedJWT(
        scopes: JWTScopes = [],
        data: any = {},
        expiresIn: string = '30s'
    ): Promise<string> {
        this.keyId ||= await this.getKeyId(this.key);

        const header = {
            typ: 'JWT',
            alg: 'ES512',
            kid: this.keyId,
        };

        return new SignJWT({
            scopes,
            data,
        })
            .setProtectedHeader(header)
            .setIssuer(issuer)
            .setNotBefore('0s')
            .setExpirationTime(expiresIn)
            .setJti(uuid())
            .sign(this.key);
    }

    private async getKeyId(key: crypto.KeyObject): Promise<string> {
        const jwk = await fromKeyLike(key);
        return calculateThumbprint(jwk);
    }
}

type JWTScopes = JWTScope[];

enum JWTScope {
    Embed = 'embed',
    BuyersRead = 'buyers.read',
    BuyersWrite = 'buyers.write',
    PaymentMethodRead = 'payment-methods.read',
    PaymentMethodWrite = 'payment-methods.write',
    PaymentOptionsRead = 'payment-options.read',
    PaymentOptionsWrite = 'payment-options.write',
    PaymentServicesRead = 'payment-services.read',
    PaymentServicesWrite = 'payment-services.write',
    TransactionsRead = 'transactions.read',
    TransactionsWrite = 'transactions.write',
}

export default Authentication;
export { JWTScope, JWTScopes };
