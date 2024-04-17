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
    * Additional schemes of the card. Only applies to card payment methods.
    */
    'additionalSchemes'?: Array<PaymentMethod.AdditionalSchemesEnum>;
    /**
    * The browser target that an approval URL must be opened in. If `any` or `null`, then there is no specific requirement.
    */
    'approvalTarget'?: PaymentMethod.ApprovalTargetEnum;
    /**
    * The optional URL that the buyer needs to be redirected to to further authorize their payment.
    */
    'approvalUrl'?: string | null;
    /**
    * The optional buyer for which this payment method has been stored.
    */
    'buyer'?: Buyer | null;
    /**
    * The 2-letter ISO code of the country this payment method can be used for. If this value is `null` the payment method may be used in multiple countries.
    */
    'country'?: string | null;
    /**
    * The date and time when this payment method was first created in our system.
    */
    'createdAt'?: Date;
    /**
    * The ISO-4217 currency code that this payment method can be used for. If this value is `null` the payment method may be used for multiple currencies.
    */
    'currency'?: string | null;
    'details'?: PaymentMethodDetailsCard;
    /**
    * The expiration date for the payment method.
    */
    'expirationDate'?: string | null;
    /**
    * An external identifier that can be used to match the payment method against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * Whether this card has a pending replacement that hasn\'t been applied yet.  When the Account Updater determines that new card details are available, existing details are not changed immediately, but this field is set to `true`. There are three scenarios in which the actual replacement occurs:  1. When this card has expired. 2. When only the expiration date changed. 3. When a transaction using this card is declined with any of the following codes:     * `canceled_payment_method`     * `expired_payment_method`     * `unavailable_payment_method`     * `unknown_payment_method`  When the replacement is applied, this field is set to `false`. For non-card payment methods, the value of this field is always set to `false`.
    */
    'hasReplacement'?: boolean;
    /**
    * A label for the card or the account. For a `paypal` payment method this is the user\'s email address. For a card it is the last 4 digits of the card.
    */
    'label'?: string | null;
    /**
    * The date and time when this card was last replaced.  When the Account Updater determines that new card details are available, existing details are not changed immediately. There are three scenarios in which the actual replacement occurs:  1. When this card has expired. 2. When only the expiration date changed. 3. When a transaction using this card is declined with any of the following codes:     * `canceled_payment_method`     * `expired_payment_method`     * `unavailable_payment_method`     * `unknown_payment_method`  When the replacement is applied, this field is updated. For non-card payment methods, the value of this field is always set to `null`.
    */
    'lastReplacedAt'?: Date | null;
    /**
    * The unique ID for a merchant account.
    */
    'merchantAccountId'?: string;
    /**
    * The type of this payment method.
    */
    'method'?: PaymentMethod.MethodEnum;
    /**
    * The mode to use with this payment method.
    */
    'mode'?: PaymentMethod.ModeEnum;
    /**
    * The scheme of the card. Only applies to card payments.
    */
    'scheme'?: PaymentMethod.SchemeEnum;
    /**
    * The state of the payment method.  - `processing` - The payment method is stored but has not been used yet. - `buyer_approval_required` - Storing the payment method requires   the buyer to provide approval. Follow the `approval_url` for next steps. - `succeeded` - The payment method is stored and has been used. - `failed` - The payment method could not be stored, or failed first use.
    */
    'status'?: PaymentMethod.StatusEnum;
    /**
    * The date and time when this payment method was last updated in our system.
    */
    'updatedAt'?: Date;
    /**
    * The unique hash derived from the payment method identifier (e.g. card number).
    */
    'fingerprint'?: string | null;

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
            "name": "additionalSchemes",
            "baseName": "additional_schemes",
            "type": "Array<PaymentMethod.AdditionalSchemesEnum>"
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
            "name": "buyer",
            "baseName": "buyer",
            "type": "Buyer"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "PaymentMethodDetailsCard"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "string"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "hasReplacement",
            "baseName": "has_replacement",
            "type": "boolean"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "lastReplacedAt",
            "baseName": "last_replaced_at",
            "type": "Date"
        },
        {
            "name": "merchantAccountId",
            "baseName": "merchant_account_id",
            "type": "string"
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
            "name": "scheme",
            "baseName": "scheme",
            "type": "PaymentMethod.SchemeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentMethod.StatusEnum"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethod.attributeTypeMap;
    }
}

export namespace PaymentMethod {
    export enum TypeEnum {
        PaymentMethod = <any> 'payment-method'
    }
    export enum AdditionalSchemesEnum {
        Accel = <any> 'accel',
        Amex = <any> 'amex',
        Bancontact = <any> 'bancontact',
        CarteBancaire = <any> 'carte-bancaire',
        Cirrus = <any> 'cirrus',
        Culiance = <any> 'culiance',
        Dankort = <any> 'dankort',
        DinersClub = <any> 'diners-club',
        Discover = <any> 'discover',
        EftposAustralia = <any> 'eftpos-australia',
        Elo = <any> 'elo',
        Hipercard = <any> 'hipercard',
        Jcb = <any> 'jcb',
        Maestro = <any> 'maestro',
        Mastercard = <any> 'mastercard',
        Mir = <any> 'mir',
        Nyce = <any> 'nyce',
        Other = <any> 'other',
        Pulse = <any> 'pulse',
        Rupay = <any> 'rupay',
        Star = <any> 'star',
        Uatp = <any> 'uatp',
        Unionpay = <any> 'unionpay',
        Visa = <any> 'visa',
        Null = <any> 'null'
    }
    export enum ApprovalTargetEnum {
        Any = <any> 'any',
        NewWindow = <any> 'new_window'
    }
    export enum MethodEnum {
        Afterpay = <any> 'afterpay',
        Alipay = <any> 'alipay',
        Alipayhk = <any> 'alipayhk',
        Applepay = <any> 'applepay',
        Bacs = <any> 'bacs',
        Banked = <any> 'banked',
        Becs = <any> 'becs',
        Bitpay = <any> 'bitpay',
        Boleto = <any> 'boleto',
        Boost = <any> 'boost',
        Card = <any> 'card',
        Cashapp = <any> 'cashapp',
        Chaseorbital = <any> 'chaseorbital',
        Clearpay = <any> 'clearpay',
        ClickToPay = <any> 'click-to-pay',
        Dana = <any> 'dana',
        Dcb = <any> 'dcb',
        Dlocal = <any> 'dlocal',
        Ebanx = <any> 'ebanx',
        Gcash = <any> 'gcash',
        Giropay = <any> 'giropay',
        Gocardless = <any> 'gocardless',
        Googlepay = <any> 'googlepay',
        Gopay = <any> 'gopay',
        Grabpay = <any> 'grabpay',
        Ideal = <any> 'ideal',
        Kakaopay = <any> 'kakaopay',
        Klarna = <any> 'klarna',
        Laybuy = <any> 'laybuy',
        Linkaja = <any> 'linkaja',
        Maybankqrpay = <any> 'maybankqrpay',
        Multibanco = <any> 'multibanco',
        Oney3x = <any> 'oney_3x',
        Oney4x = <any> 'oney_4x',
        Oney6x = <any> 'oney_6x',
        Oney10x = <any> 'oney_10x',
        Oney12x = <any> 'oney_12x',
        Ovo = <any> 'ovo',
        Oxxo = <any> 'oxxo',
        Payid = <any> 'payid',
        Paymaya = <any> 'paymaya',
        Paypal = <any> 'paypal',
        Paypalpaylater = <any> 'paypalpaylater',
        Payto = <any> 'payto',
        Venmo = <any> 'venmo',
        Pix = <any> 'pix',
        Rabbitlinepay = <any> 'rabbitlinepay',
        Scalapay = <any> 'scalapay',
        Sepa = <any> 'sepa',
        Shopeepay = <any> 'shopeepay',
        Singteldash = <any> 'singteldash',
        Sofort = <any> 'sofort',
        Stripedd = <any> 'stripedd',
        Thaiqr = <any> 'thaiqr',
        Touchngo = <any> 'touchngo',
        Truemoney = <any> 'truemoney',
        Trustly = <any> 'trustly',
        Trustlyeurope = <any> 'trustlyeurope',
        Givingblock = <any> 'givingblock',
        Wechat = <any> 'wechat',
        Zippay = <any> 'zippay',
        Bancontact = <any> 'bancontact',
        Eps = <any> 'eps',
        Linepay = <any> 'linepay',
        Razorpay = <any> 'razorpay',
        Multipago = <any> 'multipago',
        Waave = <any> 'waave',
        Smartpay = <any> 'smartpay',
        Vipps = <any> 'vipps'
    }
    export enum ModeEnum {
        Card = <any> 'card',
        Redirect = <any> 'redirect',
        Applepay = <any> 'applepay',
        Googlepay = <any> 'googlepay'
    }
    export enum SchemeEnum {
        Accel = <any> 'accel',
        Amex = <any> 'amex',
        Bancontact = <any> 'bancontact',
        CarteBancaire = <any> 'carte-bancaire',
        Cirrus = <any> 'cirrus',
        Culiance = <any> 'culiance',
        Dankort = <any> 'dankort',
        DinersClub = <any> 'diners-club',
        Discover = <any> 'discover',
        EftposAustralia = <any> 'eftpos-australia',
        Elo = <any> 'elo',
        Hipercard = <any> 'hipercard',
        Jcb = <any> 'jcb',
        Maestro = <any> 'maestro',
        Mastercard = <any> 'mastercard',
        Mir = <any> 'mir',
        Nyce = <any> 'nyce',
        Other = <any> 'other',
        Pulse = <any> 'pulse',
        Rupay = <any> 'rupay',
        Star = <any> 'star',
        Uatp = <any> 'uatp',
        Unionpay = <any> 'unionpay',
        Visa = <any> 'visa',
        Null = <any> 'null'
    }
    export enum StatusEnum {
        Processing = <any> 'processing',
        BuyerApprovalRequired = <any> 'buyer_approval_required',
        Succeeded = <any> 'succeeded',
        Failed = <any> 'failed'
    }
}
