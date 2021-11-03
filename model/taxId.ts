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
* The tax ID information associated to a buyer.
*/
export class TaxId {
    /**
    * The tax ID for the buyer.
    */
    'id'?: string;
    /**
    * The kind of tax ID.
    */
    'kind': TaxId.KindEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "TaxId.KindEnum"
        }    ];

    static getAttributeTypeMap() {
        return TaxId.attributeTypeMap;
    }
}

export namespace TaxId {
    export enum KindEnum {
        AeTrn = <any> 'ae.trn',
        AuAbn = <any> 'au.abn',
        BrCnpj = <any> 'br.cnpj',
        BrCpf = <any> 'br.cpf',
        CaBn = <any> 'ca.bn',
        CaGstHst = <any> 'ca.gst_hst',
        CaPstBc = <any> 'ca.pst_bc',
        CaPstMb = <any> 'ca.pst_mb',
        CaPstSk = <any> 'ca.pst_sk',
        CaQst = <any> 'ca.qst',
        ChVat = <any> 'ch.vat',
        ClTin = <any> 'cl.tin',
        EsCif = <any> 'es.cif',
        EuVat = <any> 'eu.vat',
        GbVat = <any> 'gb.vat',
        HkBr = <any> 'hk.br',
        IdNpwp = <any> 'id.npwp',
        InGst = <any> 'in.gst',
        JpCn = <any> 'jp.cn',
        JpRn = <any> 'jp.rn',
        KrBrn = <any> 'kr.brn',
        LiUid = <any> 'li.uid',
        MxRfc = <any> 'mx.rfc',
        MyFrp = <any> 'my.frp',
        MyItn = <any> 'my.itn',
        MySst = <any> 'my.sst',
        NoVat = <any> 'no.vat',
        NzGst = <any> 'nz.gst',
        RuInn = <any> 'ru.inn',
        RuKpp = <any> 'ru.kpp',
        SaVat = <any> 'sa.vat',
        SgGst = <any> 'sg.gst',
        SgUen = <any> 'sg.uen',
        ThVat = <any> 'th.vat',
        TwVat = <any> 'tw.vat',
        UsEin = <any> 'us.ein',
        ZaVat = <any> 'za.vat'
    }
}