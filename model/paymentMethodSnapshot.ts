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
import { PaymentMethodDetailsCard } from './paymentMethodDetailsCard';

/**
* Snapshot of a payment method, as used when embedded inside other resources.
*/
export class PaymentMethodSnapshot {
    /**
    * `payment-method`.
    */
    'type'?: PaymentMethodSnapshot.TypeEnum;
    /**
    * The unique ID of the payment method.
    */
    'id'?: string | null;
    /**
    * The browser target that an approval URL must be opened in. If `any` or `null`, then there is no specific requirement.
    */
    'approvalTarget'?: PaymentMethodSnapshot.ApprovalTargetEnum;
    /**
    * The optional URL that the buyer needs to be redirected to to further authorize their payment.
    */
    'approvalUrl'?: string | null;
    /**
    * The 2-letter ISO code of the country this payment method can be used for. If this value is `null` the payment method may be used in multiple countries.
    */
    'country'?: string | null;
    /**
    * The ISO-4217 currency code that this payment method can be used for. If this value is `null` the payment method may be used for multiple currencies.
    */
    'currency'?: string | null;
    'details'?: PaymentMethodDetailsCard;
    /**
    * The expiration date for this payment method. This is mostly used by cards where the card might have an expiration date.
    */
    'expirationDate'?: string | null;
    /**
    * An external identifier that can be used to match the payment method against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * A label for the payment method. This can be the last 4 digits for a card, or the email address for an alternative payment method.
    */
    'label'?: string;
    /**
    * The date and time when this card was last replaced.  When the Account Updater determines that new card details are available, existing details are not changed immediately. There are three scenarios in which the actual replacement occurs:  1. When this card has expired. 2. When only the expiration date changed. 3. When a transaction using this card is declined with any of the following codes:     * `canceled_payment_method`     * `expired_payment_method`     * `unavailable_payment_method`     * `unknown_payment_method`  When the replacement is applied, this field is updated. For non-card payment methods, the value of this field is always set to `null`.
    */
    'lastReplacedAt'?: Date | null;
    /**
    * The type of this payment method.
    */
    'method'?: PaymentMethodSnapshot.MethodEnum;
    /**
    * The payment account reference (PAR) returned by the card scheme. This is a unique reference to the underlying account that has been used to fund this payment method. This value will be unique if the same underlying account was used, regardless of the actual payment method used. For example, a network token or an Apple Pay device token will return the same PAR when possible.  The uniqueness of this value will depend on the card scheme, please refer to their documentation for further details. The availability of the PAR in our API depends on the availability of its value in the API of the payment service used for the transaction.
    */
    'paymentAccountReference'?: string | null;
    /**
    * An additional label used to differentiate different sub-types of a payment method. Most notably this can include the type of card used in a transaction. This field is `null` for the non-card payment methods. This represents the card scheme sent to the connector and it could be different from the actual card scheme that is being used by the PSP to process the transaction in the following situations: 1. `use_additional_scheme` transformation is used with the `PAN` instrument but we already have a PSP token for the card. 2. `use_additional_scheme` transformation is used but PSP has fallen back to the main card scheme internally.
    */
    'scheme'?: PaymentMethodSnapshot.SchemeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodSnapshot.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "approvalTarget",
            "baseName": "approval_target",
            "type": "PaymentMethodSnapshot.ApprovalTargetEnum"
        },
        {
            "name": "approvalUrl",
            "baseName": "approval_url",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
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
            "name": "method",
            "baseName": "method",
            "type": "PaymentMethodSnapshot.MethodEnum"
        },
        {
            "name": "paymentAccountReference",
            "baseName": "payment_account_reference",
            "type": "string"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "PaymentMethodSnapshot.SchemeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodSnapshot.attributeTypeMap;
    }
}

export namespace PaymentMethodSnapshot {
    export enum TypeEnum {
        PaymentMethod = <any> 'payment-method'
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
        Bancontact = <any> 'bancontact',
        Banked = <any> 'banked',
        Becs = <any> 'becs',
        Bitpay = <any> 'bitpay',
        Boleto = <any> 'boleto',
        Boost = <any> 'boost',
        Card = <any> 'card',
        CheckoutSession = <any> 'checkout-session',
        ClickToPay = <any> 'click-to-pay',
        Clearpay = <any> 'clearpay',
        Dana = <any> 'dana',
        Dcb = <any> 'dcb',
        Eps = <any> 'eps',
        Fortumo = <any> 'fortumo',
        Gcash = <any> 'gcash',
        Giropay = <any> 'giropay',
        Gocardless = <any> 'gocardless',
        Googlepay = <any> 'googlepay',
        Gopay = <any> 'gopay',
        Grabpay = <any> 'grabpay',
        Ideal = <any> 'ideal',
        Id = <any> 'id',
        Kakaopay = <any> 'kakaopay',
        Klarna = <any> 'klarna',
        Laybuy = <any> 'laybuy',
        Linepay = <any> 'linepay',
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
        Paymaya = <any> 'paymaya',
        Paypal = <any> 'paypal',
        Paypalpaylater = <any> 'paypalpaylater',
        Pix = <any> 'pix',
        Rabbitlinepay = <any> 'rabbitlinepay',
        Razorpay = <any> 'razorpay',
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
        Venmo = <any> 'venmo',
        Waave = <any> 'waave',
        Wechat = <any> 'wechat',
        Zippay = <any> 'zippay'
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
        Nyce = <any> 'nyce',
        Other = <any> 'other',
        Pulse = <any> 'pulse',
        Rupay = <any> 'rupay',
        Star = <any> 'star',
        Unionpay = <any> 'unionpay',
        Visa = <any> 'visa'
    }
}
