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
import { MerchantProfileAmex } from './merchantProfileAmex';
import { MerchantProfileDankort } from './merchantProfileDankort';
import { MerchantProfileDiscover } from './merchantProfileDiscover';
import { MerchantProfileJcb } from './merchantProfileJcb';
import { MerchantProfileMastercard } from './merchantProfileMastercard';
import { MerchantProfileUnionpay } from './merchantProfileUnionpay';
import { MerchantProfileVisa } from './merchantProfileVisa';

/**
* Configuration for each supported card scheme. When updating a Payment Service, a key not being present will indicate no updates to be done on that scheme, whereas an object being sent as Null for a key will empty the configuration for that scheme.
*/
export class PaymentServiceUpdateMerchantProfile {
    'amex'?: MerchantProfileAmex | null;
    'dankort'?: MerchantProfileDankort | null;
    'discover'?: MerchantProfileDiscover | null;
    'jcb'?: MerchantProfileJcb | null;
    'mastercard'?: MerchantProfileMastercard | null;
    'unionpay'?: MerchantProfileUnionpay | null;
    'visa'?: MerchantProfileVisa | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amex",
            "baseName": "amex",
            "type": "MerchantProfileAmex"
        },
        {
            "name": "dankort",
            "baseName": "dankort",
            "type": "MerchantProfileDankort"
        },
        {
            "name": "discover",
            "baseName": "discover",
            "type": "MerchantProfileDiscover"
        },
        {
            "name": "jcb",
            "baseName": "jcb",
            "type": "MerchantProfileJcb"
        },
        {
            "name": "mastercard",
            "baseName": "mastercard",
            "type": "MerchantProfileMastercard"
        },
        {
            "name": "unionpay",
            "baseName": "unionpay",
            "type": "MerchantProfileUnionpay"
        },
        {
            "name": "visa",
            "baseName": "visa",
            "type": "MerchantProfileVisa"
        }    ];

    static getAttributeTypeMap() {
        return PaymentServiceUpdateMerchantProfile.attributeTypeMap;
    }
}
