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
import { Role } from './role';
import { RoleAssignmentAssignee } from './roleAssignmentAssignee';

export class RoleAssignment {
    /**
    * The type of this resource. Always `role-assignment`.
    */
    'type'?: RoleAssignment.TypeEnum;
    /**
    * The unique ID for this role assignment.
    */
    'id'?: string;
    'role'?: Role;
    'assignee'?: RoleAssignmentAssignee;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "RoleAssignment.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "Role"
        },
        {
            "name": "assignee",
            "baseName": "assignee",
            "type": "RoleAssignmentAssignee"
        }    ];

    static getAttributeTypeMap() {
        return RoleAssignment.attributeTypeMap;
    }
}

export namespace RoleAssignment {
    export enum TypeEnum {
        RoleAssignment = <any> 'role-assignment'
    }
}
