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
import { MerchantAccount } from './merchantAccount';
import { UserRole } from './userRole';

export class User {
    /**
    * `user`.
    */
    'type'?: User.TypeEnum;
    /**
    * The unique Gr4vy ID for this user.
    */
    'id'?: string;
    /**
    * The full name of this user.
    */
    'name'?: string;
    /**
    * The email address for this user.
    */
    'emailAddress'?: string;
    /**
    * The user has set a valid password.
    */
    'hasValidPassword'?: boolean;
    /**
    * The token required when setting a password.
    */
    'resetToken'?: string | null;
    /**
    * The expiration date for the reset token.
    */
    'resetTokenExpiresAt'?: Date | null;
    /**
    * The date that the user last logged in at.
    */
    'lastLoggedInAt'?: Date | null;
    /**
    * The current status of this user.
    */
    'status'?: User.StatusEnum;
    /**
    * The roles this user has been assigned.
    */
    'roles'?: Array<UserRole>;
    /**
    * A list of merchant accounts that the user is assigned to.
    */
    'merchantAccounts'?: Array<MerchantAccount>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "User.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "string"
        },
        {
            "name": "hasValidPassword",
            "baseName": "has_valid_password",
            "type": "boolean"
        },
        {
            "name": "resetToken",
            "baseName": "reset_token",
            "type": "string"
        },
        {
            "name": "resetTokenExpiresAt",
            "baseName": "reset_token_expires_at",
            "type": "Date"
        },
        {
            "name": "lastLoggedInAt",
            "baseName": "last_logged_in_at",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "User.StatusEnum"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<UserRole>"
        },
        {
            "name": "merchantAccounts",
            "baseName": "merchant_accounts",
            "type": "Array<MerchantAccount>"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

export namespace User {
    export enum TypeEnum {
        User = <any> 'user'
    }
    export enum StatusEnum {
        Active = <any> 'active',
        Pending = <any> 'pending'
    }
}
