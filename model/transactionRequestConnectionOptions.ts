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
import { ConnectionOptionsAdyenCard } from './connectionOptionsAdyenCard';
import { ConnectionOptionsCybersourceAntiFraud } from './connectionOptionsCybersourceAntiFraud';
import { ConnectionOptionsCybersourceCard } from './connectionOptionsCybersourceCard';
import { ConnectionOptionsCybersourceIdeal } from './connectionOptionsCybersourceIdeal';
import { ConnectionOptionsCybersourceKcp } from './connectionOptionsCybersourceKcp';
import { ConnectionOptionsForterAntiFraud } from './connectionOptionsForterAntiFraud';
import { ConnectionOptionsGivingblockGivingblock } from './connectionOptionsGivingblockGivingblock';
import { ConnectionOptionsPaypalPaypal } from './connectionOptionsPaypalPaypal';
import { ConnectionOptionsStripeCard } from './connectionOptionsStripeCard';

/**
* Allows for passing optional configuration per connection to take advantage of connection specific features. When provided, the data is only passed to the target connection type to prevent sharing configuration across connections.  Please note that each of the keys this object are in kebab-case, for example `cybersource-anti-fraud` as they represent the ID of the connector. All the other keys will be snake case, for example `merchant_defined_data` or camel case to match an external API that the connector uses.
*/
export class TransactionRequestConnectionOptions {
    'cybersourceCard'?: ConnectionOptionsCybersourceCard | null;
    'cybersourceKcp'?: ConnectionOptionsCybersourceKcp | null;
    'cybersourceIdeal'?: ConnectionOptionsCybersourceIdeal | null;
    'cybersourceAntiFraud'?: ConnectionOptionsCybersourceAntiFraud | null;
    'givingblockGivingblock'?: ConnectionOptionsGivingblockGivingblock | null;
    'forterAntiFraud'?: ConnectionOptionsForterAntiFraud | null;
    'adyenCard'?: ConnectionOptionsAdyenCard | null;
    'paypalPaypal'?: ConnectionOptionsPaypalPaypal | null;
    'paypalPaypalpaylater'?: ConnectionOptionsPaypalPaypal | null;
    'stripeCard'?: ConnectionOptionsStripeCard | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cybersourceCard",
            "baseName": "cybersource-card",
            "type": "ConnectionOptionsCybersourceCard"
        },
        {
            "name": "cybersourceKcp",
            "baseName": "cybersource-kcp",
            "type": "ConnectionOptionsCybersourceKcp"
        },
        {
            "name": "cybersourceIdeal",
            "baseName": "cybersource-ideal",
            "type": "ConnectionOptionsCybersourceIdeal"
        },
        {
            "name": "cybersourceAntiFraud",
            "baseName": "cybersource-anti-fraud",
            "type": "ConnectionOptionsCybersourceAntiFraud"
        },
        {
            "name": "givingblockGivingblock",
            "baseName": "givingblock-givingblock",
            "type": "ConnectionOptionsGivingblockGivingblock"
        },
        {
            "name": "forterAntiFraud",
            "baseName": "forter-anti-fraud",
            "type": "ConnectionOptionsForterAntiFraud"
        },
        {
            "name": "adyenCard",
            "baseName": "adyen-card",
            "type": "ConnectionOptionsAdyenCard"
        },
        {
            "name": "paypalPaypal",
            "baseName": "paypal-paypal",
            "type": "ConnectionOptionsPaypalPaypal"
        },
        {
            "name": "paypalPaypalpaylater",
            "baseName": "paypal-paypalpaylater",
            "type": "ConnectionOptionsPaypalPaypal"
        },
        {
            "name": "stripeCard",
            "baseName": "stripe-card",
            "type": "ConnectionOptionsStripeCard"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRequestConnectionOptions.attributeTypeMap;
    }
}

