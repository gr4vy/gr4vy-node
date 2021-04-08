import snakeCaseKeys from 'snakecase-keys';
import { v4 as uuid } from 'uuid';
import { version } from './package';
import jwt from 'jsonwebtoken';
import { jwkThumbprintByEncoding } from 'jwk-thumbprint';
import keyto from '@trust/keyto';

const issuer = `Gr4vy SDK ${version} - Node ${process.version}`;

class Authentication {
    privateKey: string;

    constructor(privateKey: string) {
        this.privateKey = privateKey;
    }

    public async getJWS(
        scopes: JWTScopes = [JWTScope.ReadAll, JWTScope.WriteAll],
        expiresIn: string = '30s',
        embed?: EmbedParams
    ): Promise<string> {
        const keyid: string = await this.getKeyId();
        const claims = { scopes };

        if (scopes.includes(JWTScope.Embed) && embed) {
            claims['embed'] = snakeCaseKeys(embed);
        }

        return jwt.sign(claims, this.privateKey, {
            algorithm: 'ES512',
            keyid,
            jwtid: uuid(),
            expiresIn,
            notBefore: '0s',
            issuer,
        });
    }

    public async getKeyId(): Promise<string> {
        const jwk = keyto.from(this.privateKey, 'pem').toJwk('private');
        return jwkThumbprintByEncoding(jwk, 'SHA-256', 'base64url');
    }
}

type JWTScopes = JWTScope[];

enum JWTScope {
    ReadAll = '*.read',
    WriteAll = '*.write',
    Embed = 'embed',
    BuyersRead = 'buyers.read',
    BuyersWrite = 'buyers.write',
    CardRulesRead = 'card-rules.read',
    CardRulesWrite = 'card-rules.write',
    PaymentMethodRead = 'payment-methods.read',
    PaymentMethodWrite = 'payment-methods.write',
    PaymentOptionsRead = 'payment-options.read',
    PaymentServiceDefinitionsRead = 'payment-service-definitions.read',
    PaymentServicesRead = 'payment-services.read',
    PaymentServicesWrite = 'payment-services.write',
    TransactionsRead = 'transactions.read',
    TransactionsWrite = 'transactions.write',
}

type EmbedParams = {
    amount: number;
    currency: string;
    buyerId?: string;
    buyerExternalIdentifier?: string;
};

export default Authentication;
export { JWTScope, JWTScopes, EmbedParams };
