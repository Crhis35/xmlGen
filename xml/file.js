const file = {
  AttachedDocument: {
    $: {
      xmlns: 'urn:oasis:names:specification:ubl:schema:xsd:AttachedDocument-2',
      'xmlns:cac':
        'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
      'xmlns:cbc':
        'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
      'xmlns:ccts':
        'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
      'xmlns:ds': 'http://www.w3.org/2000/09/xmldsig#',
      'xmlns:ext':
        'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
      'xmlns:xades': 'http://uri.etsi.org/01903/v1.3.2#',
      'xmlns:xades141': 'http://uri.etsi.org/01903/v1.4.1#',
    },
    'ext:UBLExtensions': [
      {
        'ext:UBLExtension': [
          {
            'ext:ExtensionContent': [
              {
                'ds:Signature': [
                  {
                    $: { Id: 'xmldsig-831c963a-2c98-4a83-9b61-e2a375338f3f' },
                    'ds:SignedInfo': [
                      {
                        'ds:CanonicalizationMethod': [
                          {
                            $: {
                              Algorithm:
                                'http://www.w3.org/TR/2001/REC-xml-c14n-20010315',
                            },
                          },
                        ],
                        'ds:SignatureMethod': [
                          {
                            $: {
                              Algorithm:
                                'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
                            },
                          },
                        ],
                        'ds:Reference': [
                          {
                            $: {
                              Id: 'xmldsig-831c963a-2c98-4a83-9b61-e2a375338f3f-ref0',
                              URI: '',
                            },
                            'ds:Transforms': [
                              {
                                'ds:Transform': [
                                  {
                                    $: {
                                      Algorithm:
                                        'http://www.w3.org/2000/09/xmldsig#enveloped-signature',
                                    },
                                  },
                                ],
                              },
                            ],
                            'ds:DigestMethod': [
                              {
                                $: {
                                  Algorithm:
                                    'http://www.w3.org/2001/04/xmlenc#sha256',
                                },
                              },
                            ],
                            'ds:DigestValue': [
                              'JiGUyjIkSPHEH4UuQkElPVb9zAM1LA6rf5p/uiNzQ/A=',
                            ],
                          },
                          {
                            $: {
                              URI: '#xmldsig-831c963a-2c98-4a83-9b61-e2a375338f3f-keyinfo',
                            },
                            'ds:DigestMethod': [
                              {
                                $: {
                                  Algorithm:
                                    'http://www.w3.org/2001/04/xmlenc#sha256',
                                },
                              },
                            ],
                            'ds:DigestValue': [
                              '7hd9xzbs+0ed08qjRbt+Erp8m0cYDfpULHT2D+foDgs=',
                            ],
                          },
                          {
                            $: {
                              Type: 'http://uri.etsi.org/01903#SignedProperties',
                              URI: '#xmldsig-831c963a-2c98-4a83-9b61-e2a375338f3f-signedprops',
                            },
                            'ds:DigestMethod': [
                              {
                                $: {
                                  Algorithm:
                                    'http://www.w3.org/2001/04/xmlenc#sha256',
                                },
                              },
                            ],
                            'ds:DigestValue': [
                              'g/T3MLtJQ0LuKDoKOQT4HnUVhv0MQUT8BxyMoXBTMGs=',
                            ],
                          },
                        ],
                      },
                    ],
                    'ds:SignatureValue': [
                      {
                        _: 'pwDNVPLunbfWRVlCLQTWHQcJqibqTZamquTC/TnIDfsVj0h5a9DuLG9IGWQtiBLtNRyhEPa1SMzsyn5QGEOeRfV+RsZA75Vls80mXng01E3tbfvZfif2lo+TfZxur+/y485O9NIwTUTAQjNo4XQfzI2xDhzSPeXhMiBVlZvPmnws1iZfI6yR/OvGCC0AiH3jIyu1AyXvZYuHDknkdCc+1rM+1BxdrXyYys3srUTV9wn9TZn27ir8zpsY4chB7fq3S5MK9KsCLCZxULFAGtma47ZysAdaxNTEQPfS2zjpVsPHdKcpIZSJg3opQ75WY0k8crvJGc0WfttXVw0cQNZz9g==',
                        $: {
                          Id: 'xmldsig-831c963a-2c98-4a83-9b61-e2a375338f3f-sigvalue',
                        },
                      },
                    ],
                    'ds:KeyInfo': [
                      {
                        $: {
                          Id: 'xmldsig-831c963a-2c98-4a83-9b61-e2a375338f3f-keyinfo',
                        },
                        'ds:X509Data': [
                          {
                            'ds:X509Certificate': [
                              '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',
                            ],
                          },
                        ],
                      },
                    ],
                    'ds:Object': [
                      {
                        'xades:QualifyingProperties': [
                          {
                            $: {
                              Target:
                                '#xmldsig-831c963a-2c98-4a83-9b61-e2a375338f3f',
                            },
                            'xades:SignedProperties': [
                              {
                                $: {
                                  Id: 'xmldsig-831c963a-2c98-4a83-9b61-e2a375338f3f-signedprops',
                                },
                                'xades:SignedSignatureProperties': [
                                  {
                                    'xades:SigningTime': [
                                      '2021-09-08T08:58:50.839-05:00',
                                    ],
                                    'xades:SigningCertificate': [
                                      {
                                        'xades:Cert': [
                                          {
                                            'xades:CertDigest': [
                                              {
                                                'ds:DigestMethod': [
                                                  {
                                                    $: {
                                                      Algorithm:
                                                        'http://www.w3.org/2001/04/xmlenc#sha256',
                                                    },
                                                  },
                                                ],
                                                'ds:DigestValue': [
                                                  'beRIHeBtrhsWRkbTRdYyWKqCd0eiNmrd/oj3SVukukM=',
                                                ],
                                              },
                                            ],
                                            'xades:IssuerSerial': [
                                              {
                                                'ds:X509IssuerName': [
                                                  'c=CO,l=Bogota D.C.,o=Andes SCD,ou=Division de certificacion entidad final,cn=CA ANDES SCD S.A. Clase II v2,1.2.840.113549.1.9.1=info@andesscd.com.co',
                                                ],
                                                'ds:X509SerialNumber': [
                                                  '8462728514856445664',
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            'xades:CertDigest': [
                                              {
                                                'ds:DigestMethod': [
                                                  {
                                                    $: {
                                                      Algorithm:
                                                        'http://www.w3.org/2001/04/xmlenc#sha256',
                                                    },
                                                  },
                                                ],
                                                'ds:DigestValue': [
                                                  'PbsKGMpB0A2Y9NAz6F8LkU5nR+ONJASyK9D/bRTdbZ0=',
                                                ],
                                              },
                                            ],
                                            'xades:IssuerSerial': [
                                              {
                                                'ds:X509IssuerName': [
                                                  'c=CO,l=Bogota D.C.,o=Andes SCD,ou=Division de certificacion,cn=ROOT CA ANDES SCD S.A.,1.2.840.113549.1.9.1=info@andesscd.com.co',
                                                ],
                                                'ds:X509SerialNumber': [
                                                  '4951343590990220136',
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            'xades:CertDigest': [
                                              {
                                                'ds:DigestMethod': [
                                                  {
                                                    $: {
                                                      Algorithm:
                                                        'http://www.w3.org/2001/04/xmlenc#sha256',
                                                    },
                                                  },
                                                ],
                                                'ds:DigestValue': [
                                                  'Cs7emRwtXWVYHJrqS9eXEXfUcFyJJBqFhDFOetHu8ts=',
                                                ],
                                              },
                                            ],
                                            'xades:IssuerSerial': [
                                              {
                                                'ds:X509IssuerName': [
                                                  'c=CO,l=Bogota D.C.,o=Andes SCD,ou=Division de certificacion,cn=ROOT CA ANDES SCD S.A.,1.2.840.113549.1.9.1=info@andesscd.com.co',
                                                ],
                                                'ds:X509SerialNumber': [
                                                  '3184328748892787122',
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                    'xades:SignaturePolicyIdentifier': [
                                      {
                                        'xades:SignaturePolicyId': [
                                          {
                                            'xades:SigPolicyId': [
                                              {
                                                'xades:Identifier': [
                                                  'https://s3.amazonaws.com/efactura.resources/politicadefirmav2.pdf',
                                                ],
                                              },
                                            ],
                                            'xades:SigPolicyHash': [
                                              {
                                                'ds:DigestMethod': [
                                                  {
                                                    $: {
                                                      Algorithm:
                                                        'http://www.w3.org/2001/04/xmlenc#sha256',
                                                    },
                                                  },
                                                ],
                                                'ds:DigestValue': [
                                                  'dMoMvtcG5aIzgYo0tIsSQeVJBDnUnfSOfBpxXrmor0Y=',
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                    'xades:SignerRole': [
                                      {
                                        'xades:ClaimedRoles': [
                                          {
                                            'xades:ClaimedRole': [
                                              'third party',
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    'cbc:UBLVersionID': ['UBL 2.1'],
    'cbc:CustomizationID': ['Documentos adjuntos'],
    'cbc:ProfileID': ['DIAN 2.1'],
    'cbc:ProfileExecutionID': ['1'],
    'cbc:ID': ['FE6187'],
    'cbc:IssueDate': ['2021-09-08'],
    'cbc:IssueTime': ['13:58:50-05:00'],
    'cbc:DocumentType': ['Contenedor de Factura Electrónica'],
    'cbc:ParentDocumentID': ['FE6187'],
    'cac:SenderParty': [
      {
        'cac:PartyTaxScheme': [
          {
            'cbc:RegistrationName': ['PROCESANDO PRODUCTOS AL NATURAL S.A.S'],
            'cbc:CompanyID': [
              {
                _: '900445185',
                $: {
                  schemeAgencyID: '195',
                  schemeAgencyName:
                    'CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)',
                  schemeID: '9',
                  schemeName: '31',
                },
              },
            ],
            'cbc:TaxLevelCode': [{ _: 'R-99-PN', $: { listName: '49' } }],
            'cac:TaxScheme': [{ 'cbc:ID': ['01'], 'cbc:Name': ['IVA'] }],
          },
        ],
      },
    ],
    'cac:ReceiverParty': [
      {
        'cac:PartyTaxScheme': [
          {
            'cbc:RegistrationName': ['Procesadora de Alimentos El Gordo SA'],
            'cbc:CompanyID': [
              {
                _: '860057336',
                $: {
                  schemeAgencyID: '195',
                  schemeAgencyName:
                    'CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)',
                  schemeID: '5',
                  schemeName: '31',
                },
              },
            ],
            'cbc:TaxLevelCode': [{ _: 'R-99-PN', $: { listName: '48' } }],
            'cac:TaxScheme': [{ 'cbc:ID': ['ZZ'], 'cbc:Name': ['No aplica'] }],
          },
        ],
      },
    ],
    'cac:Attachment': [
      {
        'cac:ExternalReference': [
          {
            'cbc:MimeCode': ['text/xml'],
            'cbc:EncodingCode': ['UTF-8'],
            'cbc:Description': [
              '<?xml version="1.0" encoding="utf-8" standalone="no"?><Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:sts="dian:gov:co:facturaelectronica:Structures-2-1" xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" xmlns:xades141="http://uri.etsi.org/01903/v1.4.1#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 http://docs.oasis-open.org/ubl/os-UBL-2.1/xsd/maindoc/UBL-Invoice-2.1.xsd">\n     <ext:UBLExtensions>\n        <ext:UBLExtension>\n          <ext:ExtensionContent>\n            <sts:DianExtensions>\n              <sts:InvoiceControl>\n                <sts:InvoiceAuthorization>18764016420877</sts:InvoiceAuthorization>\n                <sts:AuthorizationPeriod>\n                  <cbc:StartDate>2021-08-16</cbc:StartDate>\n                  <cbc:EndDate>2022-08-16</cbc:EndDate>\n                </sts:AuthorizationPeriod>\n                <sts:AuthorizedInvoices>\n                  <sts:Prefix>FE</sts:Prefix>\n                  <sts:From>6132</sts:From>\n                  <sts:To>6500</sts:To>\n                </sts:AuthorizedInvoices>\n              </sts:InvoiceControl>\n            <sts:InvoiceSource>\n                       <cbc:IdentificationCode listAgencyID="6" listAgencyName="United Nations Economic Commission for Europe" listSchemeURI="urn:oasis:names:specification:ubl:codelist:gc:CountryIdentificationCode-2.1">CO</cbc:IdentificationCode>\n                   </sts:InvoiceSource>\n                   <sts:SoftwareProvider>\n                        <sts:ProviderID schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)" schemeID="0" schemeName="31">890930534</sts:ProviderID>\n                        <sts:SoftwareID schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">49fab599-4556-4828-a30b-852a910c5bb1</sts:SoftwareID>\n                   </sts:SoftwareProvider>\n                    <sts:SoftwareSecurityCode schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">d73d78e28f56f97fd3dfc5ca6f314e7264a14ff94efb1ed42b0b06332a602006cd26d0a6ac8cef5c911fe4ed95083f50</sts:SoftwareSecurityCode>\n                   <sts:AuthorizationProvider>\n                       <sts:AuthorizationProviderID schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)" schemeID="4" schemeName="31">800197268</sts:AuthorizationProviderID>\n                    </sts:AuthorizationProvider>\n                   <sts:QRCode>NroFactura=FE6187\n\t\t\t\t\tNitFacturador=900445185\n\t\t\t\t\tNitAdquiriente=860057336\n\t\t\t\t\tFechaFactura=2021-09-08\n\t\t\t\t\tHoraFactura=08:58:44-05:00\n\t\t\t\t\tValorFactura=780000.00\n\t\t\t\t\tValorIVA=0.00\n\t\t\t\t\tValorOtrosImpuestos=0.00\n\t\t\t\t\tValorTotalFactura=780000.00\n\t\t\t\t\tCUFE=https://catalogo-vpfe.dian.gov.co/document/searchqr?documentkey=2a839d1a82c303ee76b2ad83be0ee95f1de54cf3ece3efaf1600e4df543ee4392273d8cf0ff3c902c11a3ffd4b54d843</sts:QRCode>\n              </sts:DianExtensions>\n          </ext:ExtensionContent>\n        </ext:UBLExtension>\n      <ext:UBLExtension><ext:ExtensionContent><ds:Signature Id="xmldsig-b737a6fa-e922-4708-8b7a-41d90aa2852c"><ds:SignedInfo><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/><ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/><ds:Reference Id="xmldsig-b737a6fa-e922-4708-8b7a-41d90aa2852c-ref0" URI=""><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>//ZE2Q5cWlPTXKGzUF3banSkO3Wf4nwOqN3yd/bIhiE=</ds:DigestValue></ds:Reference><ds:Reference URI="#xmldsig-b737a6fa-e922-4708-8b7a-41d90aa2852c-keyinfo"><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>ztEorzLSPnQlPFFg825w0+o7ASL7BrLFNzlIZpWPTr0=</ds:DigestValue></ds:Reference><ds:Reference Type="http://uri.etsi.org/01903#SignedProperties" URI="#xmldsig-b737a6fa-e922-4708-8b7a-41d90aa2852c-signedprops"><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>Ktbiaf7ZbLh0rdtVXsx55vS9h9/rk0Y79yBIRr1RNWU=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue Id="xmldsig-b737a6fa-e922-4708-8b7a-41d90aa2852c-sigvalue">cX+lWGSo/Y4VhmXFdjLKxf2ERcaI1Y5I7NntHnthWcLp86lY3poBO54pnVXQpdOu/zgMyHjq1XYaAJhrjHbEpYHFCKlfVpZ/yUpLsxPIfdRxYT/zRay/T6ce4r3AygVSmIEeEGX0aIZYSAHy2acWsKW/D0hFm1Woe2SuZslR+zmG0ENHpN4DUbaA0gOHo7Zgwg1WhxM144hatbYwh3vT0c7apR/bAqVSsIK4WTmH76XJNbcSMVoOJfU6j+NhLAlh0zDx+nZpsHAKHrF5Aq28E4iafJR0FUhGLq2ZD3y227S3YEPM/pF8MZk4hxQjYXojberYhPI+b/hqk7uw0xNi2w==</ds:SignatureValue><ds:KeyInfo Id="xmldsig-b737a6fa-e922-4708-8b7a-41d90aa2852c-keyinfo"><ds:X509Data><ds:X509Certificate>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</ds:X509Certificate></ds:X509Data></ds:KeyInfo><ds:Object><xades:QualifyingProperties Target="#xmldsig-b737a6fa-e922-4708-8b7a-41d90aa2852c"><xades:SignedProperties Id="xmldsig-b737a6fa-e922-4708-8b7a-41d90aa2852c-signedprops"><xades:SignedSignatureProperties><xades:SigningTime>2021-09-08T13:58:44.752Z</xades:SigningTime><xades:SigningCertificate><xades:Cert><xades:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>beRIHeBtrhsWRkbTRdYyWKqCd0eiNmrd/oj3SVukukM=</ds:DigestValue></xades:CertDigest><xades:IssuerSerial><ds:X509IssuerName>c=CO,l=Bogota D.C.,o=Andes SCD,ou=Division de certificacion entidad final,cn=CA ANDES SCD S.A. Clase II v2,1.2.840.113549.1.9.1=info@andesscd.com.co</ds:X509IssuerName><ds:X509SerialNumber>8462728514856445664</ds:X509SerialNumber></xades:IssuerSerial></xades:Cert><xades:Cert><xades:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>PbsKGMpB0A2Y9NAz6F8LkU5nR+ONJASyK9D/bRTdbZ0=</ds:DigestValue></xades:CertDigest><xades:IssuerSerial><ds:X509IssuerName>c=CO,l=Bogota D.C.,o=Andes SCD,ou=Division de certificacion,cn=ROOT CA ANDES SCD S.A.,1.2.840.113549.1.9.1=info@andesscd.com.co</ds:X509IssuerName><ds:X509SerialNumber>4951343590990220136</ds:X509SerialNumber></xades:IssuerSerial></xades:Cert><xades:Cert><xades:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>Cs7emRwtXWVYHJrqS9eXEXfUcFyJJBqFhDFOetHu8ts=</ds:DigestValue></xades:CertDigest><xades:IssuerSerial><ds:X509IssuerName>c=CO,l=Bogota D.C.,o=Andes SCD,ou=Division de certificacion,cn=ROOT CA ANDES SCD S.A.,1.2.840.113549.1.9.1=info@andesscd.com.co</ds:X509IssuerName><ds:X509SerialNumber>3184328748892787122</ds:X509SerialNumber></xades:IssuerSerial></xades:Cert></xades:SigningCertificate><xades:SignaturePolicyIdentifier><xades:SignaturePolicyId><xades:SigPolicyId><xades:Identifier>https://s3.amazonaws.com/efactura.resources/politicadefirmav2.pdf</xades:Identifier></xades:SigPolicyId><xades:SigPolicyHash><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>dMoMvtcG5aIzgYo0tIsSQeVJBDnUnfSOfBpxXrmor0Y=</ds:DigestValue></xades:SigPolicyHash></xades:SignaturePolicyId></xades:SignaturePolicyIdentifier><xades:SignerRole><xades:ClaimedRoles><xades:ClaimedRole>third party</xades:ClaimedRole></xades:ClaimedRoles></xades:SignerRole></xades:SignedSignatureProperties></xades:SignedProperties></xades:QualifyingProperties></ds:Object></ds:Signature></ext:ExtensionContent></ext:UBLExtension></ext:UBLExtensions>\n      <cbc:UBLVersionID>UBL 2.1</cbc:UBLVersionID>\n    <cbc:CustomizationID>10</cbc:CustomizationID>\n      <cbc:ProfileID>DIAN 2.1: Factura Electrónica de Venta</cbc:ProfileID>\n    <cbc:ProfileExecutionID>1</cbc:ProfileExecutionID>\n      <cbc:ID>FE6187</cbc:ID>\n      <cbc:UUID schemeID="1" schemeName="CUFE-SHA384">2a839d1a82c303ee76b2ad83be0ee95f1de54cf3ece3efaf1600e4df543ee4392273d8cf0ff3c902c11a3ffd4b54d843</cbc:UUID>\n      <cbc:IssueDate>2021-09-08</cbc:IssueDate>\n      <cbc:IssueTime>08:58:44-05:00</cbc:IssueTime>\n      <cbc:InvoiceTypeCode>01</cbc:InvoiceTypeCode>\n      <cbc:Note>Factura Electronica</cbc:Note>\n      <cbc:DocumentCurrencyCode listAgencyID="6" listAgencyName="United Nations Economic Commission for Europe" listID="ISO 4217 Alpha">COP</cbc:DocumentCurrencyCode>\n\n      <cbc:LineCountNumeric>1</cbc:LineCountNumeric>\n      <cac:InvoicePeriod>\n        <cbc:StartDate>2021-09-08</cbc:StartDate>\n        <cbc:EndDate>2021-10-08</cbc:EndDate>\n     </cac:InvoicePeriod>\n     \n\n      <cac:AccountingSupplierParty>\n        <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>\n        <cac:Party>\n          <cac:PartyName>\n            <cbc:Name>PROCESANDO PRODUCTOS AL NATURAL S.A.S</cbc:Name>\n          </cac:PartyName>\n          <cac:PhysicalLocation>\n            <cac:Address>\n              <cbc:ID>11001</cbc:ID>\n              <cbc:CityName>BOGOTÁ</cbc:CityName>\n              <cbc:CountrySubentity>Bogotá</cbc:CountrySubentity>\n              <cbc:CountrySubentityCode>11</cbc:CountrySubentityCode>\n              <cac:AddressLine>\n                <cbc:Line>Calle 11 sur #1-48</cbc:Line>\n              </cac:AddressLine>\n              <cac:Country>\n                <cbc:IdentificationCode>CO</cbc:IdentificationCode>\n                <cbc:Name languageID="es">Colombia</cbc:Name>\n              </cac:Country>\n            </cac:Address>\n          </cac:PhysicalLocation>\n          <cac:PartyTaxScheme>\n            <cbc:RegistrationName>PROCESANDO PRODUCTOS AL NATURAL S.A.S</cbc:RegistrationName>\n            <cbc:CompanyID schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)" schemeID="9" schemeName="31">900445185</cbc:CompanyID>\n            \n            \n      <cbc:TaxLevelCode listName="49">R-99-PN</cbc:TaxLevelCode>\n      \n\n            \n            <cac:RegistrationAddress>\n              <cbc:ID>11001</cbc:ID>\n              <cbc:CityName>BOGOTÁ</cbc:CityName>\n              <cbc:CountrySubentity>Bogotá</cbc:CountrySubentity>\n              <cbc:CountrySubentityCode>11</cbc:CountrySubentityCode>\n              <cac:AddressLine>\n                <cbc:Line>Calle 11 sur #1-48</cbc:Line>\n              </cac:AddressLine>\n              <cac:Country>\n                <cbc:IdentificationCode>CO</cbc:IdentificationCode>\n                <cbc:Name languageID="es">Colombia</cbc:Name>\n              </cac:Country>\n            </cac:RegistrationAddress>\n            <cac:TaxScheme>\n              <cbc:ID>01</cbc:ID>\n              <cbc:Name>IVA</cbc:Name>\n            </cac:TaxScheme>\n          </cac:PartyTaxScheme>\n          <cac:PartyLegalEntity>\n            <cbc:RegistrationName>PROCESANDO PRODUCTOS AL NATURAL S.A.S</cbc:RegistrationName>\n            <cbc:CompanyID schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)" schemeID="9" schemeName="31">900445185</cbc:CompanyID>\n            <cac:CorporateRegistrationScheme>\n                 <cbc:ID>FE</cbc:ID>\n              </cac:CorporateRegistrationScheme>\n          </cac:PartyLegalEntity>\n          <cac:Contact>\n            <cbc:ElectronicMail>procesando2002@yahoo.com</cbc:ElectronicMail>\n          </cac:Contact>\n        </cac:Party>\n      </cac:AccountingSupplierParty>\n      <cac:AccountingCustomerParty>\n        <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>\n            <cac:Party>\n              <cac:PartyName>\n                <cbc:Name>Procesadora de Alimentos El Gordo SA</cbc:Name>\n              </cac:PartyName>\n              <cac:PhysicalLocation>\n                <cac:Address>\n                  <cbc:ID>11001</cbc:ID>\n                  <cbc:CityName>BOGOTÁ</cbc:CityName>\n                  <cbc:CountrySubentity>Bogotá</cbc:CountrySubentity>\n                  <cbc:CountrySubentityCode>11</cbc:CountrySubentityCode>\n                  <cac:AddressLine>\n                    <cbc:Line>Cra 26c #26-78 Sur</cbc:Line>\n                  </cac:AddressLine>\n                  <cac:Country>\n                    <cbc:IdentificationCode>CO</cbc:IdentificationCode>\n                    <cbc:Name languageID="es">Colombia</cbc:Name>\n                  </cac:Country>\n                </cac:Address>\n              </cac:PhysicalLocation>\n              <cac:PartyTaxScheme>\n                <cbc:RegistrationName>Procesadora de Alimentos El Gordo SA</cbc:RegistrationName>\n                <cbc:CompanyID schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)" schemeID="5" schemeName="31">860057336</cbc:CompanyID>\n                <cbc:TaxLevelCode listName="48">R-99-PN</cbc:TaxLevelCode>\n\n                \n                <cac:TaxScheme>\n                  <cbc:ID>ZZ</cbc:ID>\n                  <cbc:Name>No aplica</cbc:Name>\n                </cac:TaxScheme>\n              </cac:PartyTaxScheme>\n              <cac:PartyLegalEntity>\n                <cbc:RegistrationName>Procesadora de Alimentos El Gordo SA</cbc:RegistrationName>\n                <cbc:CompanyID schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)" schemeID="5" schemeName="31">860057336</cbc:CompanyID>\n              </cac:PartyLegalEntity>\n              <cac:Contact>\n                <cbc:ElectronicMail>facturacionelectronicapagsa@gmail.com</cbc:ElectronicMail>\n              </cac:Contact>\n            </cac:Party>\n          </cac:AccountingCustomerParty>\n          <cac:PaymentMeans>\n            \n            <cbc:ID>2</cbc:ID>\n            <cbc:PaymentMeansCode>ZZZ</cbc:PaymentMeansCode>\n            <cbc:PaymentDueDate>2021-10-08</cbc:PaymentDueDate>\n          </cac:PaymentMeans>\n\n          \n          \n\n\n          \n  <cac:TaxTotal>\n    <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>\n    \n          <cac:TaxSubtotal>\n              <cbc:TaxableAmount currencyID="COP">780000.00</cbc:TaxableAmount>\n              <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>\n              <cac:TaxCategory>\n                <cbc:Percent>0.00</cbc:Percent>\n                <cac:TaxScheme>\n                    <cbc:ID>01</cbc:ID>\n                    <cbc:Name>IVA</cbc:Name>\n                </cac:TaxScheme>\n              </cac:TaxCategory>\n          </cac:TaxSubtotal>\n      \n    </cac:TaxTotal>\n  \n\n          <cac:LegalMonetaryTotal>\n            \n            <cbc:LineExtensionAmount currencyID="COP">780000.00</cbc:LineExtensionAmount>\n            <cbc:TaxExclusiveAmount currencyID="COP">780000.00</cbc:TaxExclusiveAmount>\n            <cbc:TaxInclusiveAmount currencyID="COP">780000.00</cbc:TaxInclusiveAmount>\n            <cbc:PayableAmount currencyID="COP">780000.00</cbc:PayableAmount>\n          </cac:LegalMonetaryTotal>\n          \n    <cac:InvoiceLine>\n      <cbc:ID>1</cbc:ID>\n      <cbc:InvoicedQuantity unitCode="94">2000</cbc:InvoicedQuantity>\n      <cbc:LineExtensionAmount currencyID="COP">780000.00</cbc:LineExtensionAmount>\n        \n\n      <cac:TaxTotal>\n        <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>\n          <cac:TaxSubtotal>\n            <cbc:TaxableAmount currencyID="COP">780000.00</cbc:TaxableAmount>\n            <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>\n            <cbc:BaseUnitMeasure unitCode="94">1.00</cbc:BaseUnitMeasure>\n            <cac:TaxCategory>\n              <cbc:Percent>0.00</cbc:Percent>\n              <cac:TaxScheme>\n                <cbc:ID>01</cbc:ID>\n                <cbc:Name>IVA</cbc:Name>\n              </cac:TaxScheme>\n            </cac:TaxCategory>\n          </cac:TaxSubtotal>\n        </cac:TaxTotal>\n\n      \n\n      <cac:Item>\n        <cbc:Description>Puesto Hoja Tamal Grande</cbc:Description>\n        <cac:StandardItemIdentification>\n          <cbc:ID schemeID="999">006</cbc:ID>\n        </cac:StandardItemIdentification>\n        \n\n\n      </cac:Item>\n      <cac:Price>\n        <cbc:PriceAmount currencyID="COP">390.00</cbc:PriceAmount>\n        <cbc:BaseQuantity unitCode="EA">2000.00</cbc:BaseQuantity>\n      </cac:Price>\n    </cac:InvoiceLine>\n          </Invoice>',
            ],
          },
        ],
      },
    ],
    'cac:ParentDocumentLineReference': [
      {
        'cbc:LineID': ['1'],
        'cac:DocumentReference': [
          {
            'cbc:ID': ['FE6187'],
            'cbc:UUID': [
              {
                _: '2a839d1a82c303ee76b2ad83be0ee95f1de54cf3ece3efaf1600e4df543ee4392273d8cf0ff3c902c11a3ffd4b54d843',
                $: { schemeID: '1', schemeName: 'CUFE-SHA384' },
              },
            ],
            'cbc:IssueDate': ['2021-09-08'],
            'cbc:DocumentType': ['ApplicationResponse'],
            'cac:Attachment': [
              {
                'cac:ExternalReference': [
                  {
                    'cbc:MimeCode': ['text/xml'],
                    'cbc:EncodingCode': ['UTF-8'],
                    'cbc:Description': [
                      '<?xml version="1.0" encoding="utf-8" standalone="no"?><ApplicationResponse xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:sts="dian:gov:co:facturaelectronica:Structures-2-1" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns="urn:oasis:names:specification:ubl:schema:xsd:ApplicationResponse-2">\n  <ext:UBLExtensions>\n    <ext:UBLExtension>\n      <ext:ExtensionContent>\n        <sts:DianExtensions>\n          <sts:InvoiceSource>\n            <cbc:IdentificationCode listAgencyID="6" listAgencyName="United Nations Economic Commission for Europe" listSchemeURI="urn:oasis:names:specification:ubl:codelist:gc:CountryIdentificationCode-2.1">CO</cbc:IdentificationCode>\n          </sts:InvoiceSource>\n          <sts:SoftwareProvider>\n            <sts:ProviderID schemeID="4" schemeName="31" schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">800197268</sts:ProviderID>\n            <sts:SoftwareID schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">...</sts:SoftwareID>\n          </sts:SoftwareProvider>\n          <sts:SoftwareSecurityCode schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">...</sts:SoftwareSecurityCode>\n          <sts:AuthorizationProvider>\n            <sts:AuthorizationProviderID schemeID="4" schemeName="31" schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">800197268</sts:AuthorizationProviderID>\n          </sts:AuthorizationProvider>\n        </sts:DianExtensions>\n      </ext:ExtensionContent>\n    </ext:UBLExtension>\n    <ext:UBLExtension>\n      <ext:ExtensionContent><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="Signature-0b02f2bf-5153-4508-9dfd-7b1097d8a9ef"><ds:SignedInfo><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" /><ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256" /><ds:Reference Id="Reference-87f769ca-6193-4d44-a093-7b86ada128bc" URI=""><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" /></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" /><ds:DigestValue>ELx8626x9PnZ20ORAfE4cLcj5wQC0+lHscrLhNrQSEs=</ds:DigestValue></ds:Reference><ds:Reference Id="ReferenceKeyInfo" URI="#Signature-0b02f2bf-5153-4508-9dfd-7b1097d8a9ef-KeyInfo"><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" /><ds:DigestValue>SRnitmI2S2TQ+5jVU0SAPHLvdJXl/yJqK4wECNBl9ZM=</ds:DigestValue></ds:Reference><ds:Reference Type="http://uri.etsi.org/01903#SignedProperties" URI="#xmldsig-Signature-0b02f2bf-5153-4508-9dfd-7b1097d8a9ef-signedprops"><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" /><ds:DigestValue>9+msfR0KDHtS/zFF/PdEy++q3+piPw/pt12TCj2r1Zg=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue Id="SignatureValue-0b02f2bf-5153-4508-9dfd-7b1097d8a9ef">EKnHkOtWyyWOodU2VweH6XVLoG/+IIlBWocMxSkMo8knYnVqbIE+L6hDp9vU9Er/46UhSuxMoxm3TgSOCXF2mLE3Bet/4foS3n3Qt8+s9HxU4U5Z0k8QTvT6uhYP9LGccXe1nEhWDfLvvX81mf8rLmJusKwKQ75kaLnvfqsuKGl3E5wXjqmgFh89/Zje1mVK9ZCoQ/s36Z0NwmnXe+NSSYgGcExwwMhoSJi4P886DkEeyEIdeG2b/s63sj1xGHvIDXpVdz1yw+zyYkDaH3hX4H/PcMYl98UEEZ3762VJK0S0WoCRriHVC0Tw0qjbd9AZdRHRkwO4HV7UFZxDdllfsQ==</ds:SignatureValue><ds:KeyInfo Id="Signature-0b02f2bf-5153-4508-9dfd-7b1097d8a9ef-KeyInfo"><ds:X509Data><ds:X509Certificate>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</ds:X509Certificate></ds:X509Data><ds:KeyValue><ds:RSAKeyValue><ds:Modulus>hlSIzCjb1s05krBFY3Uc/mwtct+myRi93qf7kkRLdTamBewlwgntRHWnxKA3BMWRSCOCGAGaLrmdfTfJPR2+Iev7a/6Hcd0yaSBQ7ApLJnLL5JcN+GCA5DyBw5ASTseWOZ5ypiUSjA6kUGvywqPGbwYCTtbwFZ2w6NRjb29CGIUCSYP5QL378s6a/XCBzd8cI6QbwCvz5yluhyTz/7npdgF6K2a/+piOSAifhbg6V1pmrLyzP2sTExtrU6v2wmMCmYraLmB3aMXGbD+KPYDj1y8SjnX6pE1fDOmZ0ZMiSdJHfWB8fA6e4zBbfbRpswFLR2XGcAP8h/FY8gtWDC7reQ==</ds:Modulus><ds:Exponent>AQAB</ds:Exponent></ds:RSAKeyValue></ds:KeyValue></ds:KeyInfo><ds:Object Id="XadesObjectId-f678d968-d3b6-486b-ae43-f445bc60c6dc"><xades:QualifyingProperties xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" Id="QualifyingProperties-ceefc39b-3a03-4934-b703-42ed4daef296" Target="#Signature-0b02f2bf-5153-4508-9dfd-7b1097d8a9ef"><xades:SignedProperties Id="xmldsig-Signature-0b02f2bf-5153-4508-9dfd-7b1097d8a9ef-signedprops"><xades:SignedSignatureProperties><xades:SigningTime>2021-09-08T08:58:50+00:00</xades:SigningTime><xades:SigningCertificate><xades:Cert><xades:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" /><ds:DigestValue>gFUzc+gKfd53qDUgf9rg91Kxp3eCGcDWe8o21A1/jMk=</ds:DigestValue></xades:CertDigest><xades:IssuerSerial><ds:X509IssuerName>C=CO, L=Bogota D.C., O=GSE, OU=PKI, CN=Autoridad Subordinada 01 GSE, E=info@gse.com.co</ds:X509IssuerName><ds:X509SerialNumber>112910057792616511757992</ds:X509SerialNumber></xades:IssuerSerial></xades:Cert></xades:SigningCertificate><xades:SignaturePolicyIdentifier><xades:SignaturePolicyId><xades:SigPolicyId><xades:Identifier>https://facturaelectronica.dian.gov.co/politicadefirma/v2/politicadefirmav2.pdf</xades:Identifier><xades:Description /></xades:SigPolicyId><xades:SigPolicyHash><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" /><ds:DigestValue>dMoMvtcG5aIzgYo0tIsSQeVJBDnUnfSOfBpxXrmor0Y=</ds:DigestValue></xades:SigPolicyHash></xades:SignaturePolicyId></xades:SignaturePolicyIdentifier><xades:SignerRole><xades:ClaimedRoles><xades:ClaimedRole>supplier</xades:ClaimedRole></xades:ClaimedRoles></xades:SignerRole></xades:SignedSignatureProperties><xades:SignedDataObjectProperties><xades:DataObjectFormat ObjectReference="#Reference-87f769ca-6193-4d44-a093-7b86ada128bc"><xades:MimeType>text/xml</xades:MimeType><xades:Encoding>UTF-8</xades:Encoding></xades:DataObjectFormat></xades:SignedDataObjectProperties></xades:SignedProperties></xades:QualifyingProperties></ds:Object></ds:Signature></ext:ExtensionContent>\n    </ext:UBLExtension>\n  </ext:UBLExtensions>\n  <cbc:UBLVersionID>UBL 2.1</cbc:UBLVersionID>\n  <cbc:CustomizationID>1</cbc:CustomizationID>\n  <cbc:ProfileID>DIAN 2.1</cbc:ProfileID>\n  <cbc:ProfileExecutionID>1</cbc:ProfileExecutionID>\n  <cbc:ID>51066520</cbc:ID>\n  <cbc:UUID schemeName="CUDE-SHA384">e0ab2af12ecf4f0b53438733c25f4bebff9288c6fd3258cb038f176a03e70823debe0a9cf895cb303b52746369a95ec6</cbc:UUID>\n  <cbc:IssueDate>2021-09-08</cbc:IssueDate>\n  <cbc:IssueTime>08:58:50-05:00</cbc:IssueTime>\n  <cac:SenderParty>\n    <cac:PartyTaxScheme>\n      <cbc:RegistrationName>Unidad Especial Dirección de Impuestos y Aduanas Nacionales</cbc:RegistrationName>\n      <cbc:CompanyID schemeID="4" schemeName="31">800197268</cbc:CompanyID>\n      <cac:TaxScheme>\n        <cbc:ID>01</cbc:ID>\n        <cbc:Name>IVA</cbc:Name>\n      </cac:TaxScheme>\n    </cac:PartyTaxScheme>\n  </cac:SenderParty>\n  <cac:ReceiverParty>\n    <cac:PartyTaxScheme>\n      <cbc:RegistrationName>PROCESANDO PRODUCTOS AL NATURAL S.A.S</cbc:RegistrationName>\n      <cbc:CompanyID schemeID="9" schemeName="31">900445185</cbc:CompanyID>\n      <cac:TaxScheme>\n        <cbc:ID>01</cbc:ID>\n        <cbc:Name>IVA</cbc:Name>\n      </cac:TaxScheme>\n    </cac:PartyTaxScheme>\n  </cac:ReceiverParty>\n  <cac:DocumentResponse>\n    <cac:Response>\n      <cbc:ResponseCode>02</cbc:ResponseCode>\n      <cbc:Description>Documento validado por la DIAN</cbc:Description>\n    </cac:Response>\n    <cac:DocumentReference>\n      <cbc:ID>FE6187</cbc:ID>\n      <cbc:UUID schemeName="CUFE-SHA384">2a839d1a82c303ee76b2ad83be0ee95f1de54cf3ece3efaf1600e4df543ee4392273d8cf0ff3c902c11a3ffd4b54d843</cbc:UUID>\n    </cac:DocumentReference>\n    <cac:LineResponse>\n      <cac:LineReference>\n        <cbc:LineID>1</cbc:LineID>\n      </cac:LineReference>\n      <cac:Response>\n        <cbc:ResponseCode>0000</cbc:ResponseCode>\n        <cbc:Description>0</cbc:Description>\n      </cac:Response>\n    </cac:LineResponse>\n    <cac:LineResponse>\n      <cac:LineReference>\n        <cbc:LineID>2</cbc:LineID>\n      </cac:LineReference>\n      <cac:Response>\n        <cbc:ResponseCode>0</cbc:ResponseCode>\n        <cbc:Description>La Factura electrónica FE-6187, ha sido autorizada.</cbc:Description>\n      </cac:Response>\n    </cac:LineResponse>\n  </cac:DocumentResponse>\n</ApplicationResponse>',
                    ],
                  },
                ],
              },
            ],
            'cac:ResultOfVerification': [
              {
                'cbc:ValidatorID': [
                  'Unidad Especial Dirección de Impuestos y Aduanas Nacionales',
                ],
                'cbc:ValidationResultCode': ['02'],
                'cbc:ValidationDate': ['2021-09-08'],
                'cbc:ValidationTime': ['08:58:50-05:00'],
              },
            ],
          },
        ],
      },
    ],
  },
};
