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

/**
* Information of the travelling passenger.
*/
export class AirlinePassenger {
    /**
    * Title of the passenger.
    */
    'title'?: string | null;
    /**
    * The first name(s) or given name of the passenger.
    */
    'firstName'?: string | null;
    /**
    * The last name, or family name, of the passenger.
    */
    'lastName'?: string | null;
    /**
    * The email address of the passenger.
    */
    'emailAddress'?: string | null;
    /**
    * The phone number of the passenger. This number is formatted according to the [E164 number standard](https://www.twilio.com/docs/glossary/what-e164).
    */
    'phoneNumber'?: string | null;
    /**
    * The passenger\'s unique passport number.
    */
    'passportNumber'?: string | null;
    /**
    * The ticket number for a flight.
    */
    'ticketNumber'?: string | null;
    /**
    * The passenger\'s frequent flyer number.
    */
    'frequentFlyerNumber'?: string | null;
    /**
    * The passenger\'s date of birth.
    */
    'dateOfBirth'?: string | null;
    'ageGroup'?: AirlinePassenger.AgeGroupEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "passportNumber",
            "baseName": "passport_number",
            "type": "string"
        },
        {
            "name": "ticketNumber",
            "baseName": "ticket_number",
            "type": "string"
        },
        {
            "name": "frequentFlyerNumber",
            "baseName": "frequent_flyer_number",
            "type": "string"
        },
        {
            "name": "dateOfBirth",
            "baseName": "date_of_birth",
            "type": "string"
        },
        {
            "name": "ageGroup",
            "baseName": "age_group",
            "type": "AirlinePassenger.AgeGroupEnum"
        }    ];

    static getAttributeTypeMap() {
        return AirlinePassenger.attributeTypeMap;
    }
}

export namespace AirlinePassenger {
    export enum AgeGroupEnum {
        Adult = <any> 'adult',
        Infant = <any> 'infant'
    }
}
