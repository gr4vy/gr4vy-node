/**
 * Gr4vy API
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.1.0-beta
 * Contact: code@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Buyer } from './buyer';
import { PaymentMethodDetailsCard } from './paymentMethodDetailsCard';

/**
* A generic payment method.
*/
export class PaymentMethod {
    /**
    * `payment-method`.
    */
    'type'?: PaymentMethod.TypeEnum;
    /**
    * The unique ID of the payment method.
    */
    'id'?: string;
    /**
    * The unique ID for a merchant account.
    */
    'merchantAccountId'?: string;
    /**
    * The state of the payment method.  - `processing` - The payment method is still being stored. - `buyer_approval_required` - Storing the payment method requires   the buyer to provide approval. Follow the `approval_url` for next steps. - `succeeded` - The payment method is approved and stored with all   relevant payment services. - `failed` - Storing the payment method did not succeed.
    */
    'status'?: PaymentMethod.StatusEnum;
    /**
    * The type of this payment method.
    */
    'method'?: PaymentMethod.MethodEnum;
    /**
    * The mode to use with this payment method.
    */
    'mode'?: PaymentMethod.ModeEnum;
    /**
    * The date and time when this payment method was first created in our system.
    */
    'createdAt'?: Date;
    /**
    * The date and time when this payment method was last updated in our system.
    */
    'updatedAt'?: Date;
    /**
    * An external identifier that can be used to match the payment method against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * The optional buyer for which this payment method has been stored.
    */
    'buyer'?: Buyer | null;
    /**
    * A label for the card or the account. For a `paypal` payment method this is the user\'s email address. For a card it is the last 4 digits of the card.
    */
    'label'?: string | null;
    /**
    * The scheme of the card. Only applies to card payments.
    */
    'scheme'?: string | null;
    /**
    * The expiration date for the payment method.
    */
    'expirationDate'?: string | null;
    /**
    * The browser target that an approval URL must be opened in. If `any` or `null`, then there is no specific requirement.
    */
    'approvalTarget'?: PaymentMethod.ApprovalTargetEnum;
    /**
    * The optional URL that the buyer needs to be redirected to to further authorize their payment.
    */
    'approvalUrl'?: string | null;
    /**
    * The ISO-4217 currency code that this payment method can be used for. If this value is `null` the payment method may be used for multiple currencies.
    */
    'currency'?: string | null;
    /**
    * The 2-letter ISO code of the country this payment method can be used for. If this value is `null` the payment method may be used in multiple countries.
    */
    'country'?: string | null;
    'details'?: PaymentMethodDetailsCard;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethod.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantAccountId",
            "baseName": "merchant_account_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentMethod.StatusEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PaymentMethod.MethodEnum"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "PaymentMethod.ModeEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "Buyer"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "string"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "string"
        },
        {
            "name": "approvalTarget",
            "baseName": "approval_target",
            "type": "PaymentMethod.ApprovalTargetEnum"
        },
        {
            "name": "approvalUrl",
            "baseName": "approval_url",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "PaymentMethodDetailsCard"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethod.attributeTypeMap;
    }
}

export namespace PaymentMethod {
    export enum TypeEnum {
        PaymentMethod = <any> 'payment-method'
    }
    export enum StatusEnum {
        Processing = <any> 'processing',
        BuyerApprovalRequired = <any> 'buyer_approval_required',
        Succeeded = <any> 'succeeded',
        Failed = <any> 'failed'
    }
    export enum MethodEnum {
        Afterpay = <any> 'afterpay',
        Applepay = <any> 'applepay',
        Banked = <any> 'banked',
        Bitpay = <any> 'bitpay',
        Boleto = <any> 'boleto',
        Card = <any> 'card',
        Clearpay = <any> 'clearpay',
        Dana = <any> 'dana',
        Fortumo = <any> 'fortumo',
        Gcash = <any> 'gcash',
        Gocardless = <any> 'gocardless',
        Googlepay = <any> 'googlepay',
        Grabpay = <any> 'grabpay',
        Klarna = <any> 'klarna',
        Ovo = <any> 'ovo',
        Paymaya = <any> 'paymaya',
        Paypal = <any> 'paypal',
        Pix = <any> 'pix',
        Rabbitlinepay = <any> 'rabbitlinepay',
        Scalapay = <any> 'scalapay',
        Shopeepay = <any> 'shopeepay',
        Stripedd = <any> 'stripedd',
        Truemoney = <any> 'truemoney',
        Trustly = <any> 'trustly',
        Zippay = <any> 'zippay'
    }
    export enum ModeEnum {
        Card = <any> 'card',
        Redirect = <any> 'redirect',
        Applepay = <any> 'applepay',
        Googlepay = <any> 'googlepay'
    }
    export enum ApprovalTargetEnum {
        Any = <any> 'any',
        NewWindow = <any> 'new_window'
    }
}
