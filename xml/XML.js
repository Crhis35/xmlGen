const xml2js = require('xml2js');

const deepSearchItems = (object, key, predicate) => {
  let ret = [];
  if (object.hasOwnProperty(key) && predicate(key, object[key]) === true) {
    ret = [...ret, object];
  }
  if (Object.keys(object).length) {
    for (let i = 0; i < Object.keys(object).length; i++) {
      let value = object[Object.keys(object)[i]];
      if (typeof value === 'object' && value !== null) {
        let o = deepSearchItems(value, key, predicate);
        if (o !== null && o instanceof Array) {
          ret = [...ret, ...o];
        }
      }
    }
  }
  return ret;
};
// {
//   personType: 'juridica',
//   nationalID: '1001644556',
//   verificationDigit: 0,
//   name: 'FINPPI COLOMBIA SAS',
//   lastname: '',
//   businessName: '',
//   locations: [
//     {
//       name: 'Miami',
//       headquarters: false,
//       branchCode: '',
//       address: {
//         country: 'Colombia',
//         cityCode: '05001',
//         city: 'MEDELLIN',
//         stateCode: '05',
//         state: 'ANTIOQUIA',
//         address_line1: 'Las ESTRADA',
//         address_zip_code: '05001',
//       },
//     },
//   ],
//   phoneNumber: [],
//   contacts: [{ email: 'cristian2test@gmail.com' }],
//   idType: { code: '41', name: 'Pasaporte', country: 'Colombia' },
//   regimenType: { code: '48', name: 'Responsable de IVA' },
//   fiscalResponsability: {
//     code: 'R-99-PN',
//     name: 'No responsable',
//     country: 'Colombia',
//   },
// },

class XML {
  constructor(doc) {
    this.xml = '';
    xml2js.parseString(doc, (err, result) => {
      this.xml = deepSearchItems(
        result,
        'cbc:Description',
        (key, value) => key === 'cbc:Description'
      )[0]['cbc:Description'][0];
    });
    this.clientBuilder();
  }

  clientBuilder() {
    xml2js.parseString(this.xml, (err, result) => {
      const personType = deepSearchItems(
        result,
        'cbc:AdditionalAccountID',
        (key, value) => key === 'cbc:AdditionalAccountID'
      )[1]['cbc:AdditionalAccountID'][0];

      const name = deepSearchItems(
        result,
        'cbc:Name',
        (key, value) => Array.isArray(value) && typeof value[0] === 'string'
      )[2]['cbc:Name'][0];

      const cityCode = deepSearchItems(
        result,
        'cac:Address',
        (key, value) => true
      )[1]['cac:Address'][0]['cbc:ID'][0];

      const city = deepSearchItems(
        result,
        'cac:Address',
        (key, value) => true
      )[1]['cac:Address'][0]['cbc:CityName'][0];

      const state = deepSearchItems(
        result,
        'cac:Address',
        (key, value) => true
      )[1]['cac:Address'][0]['cbc:CountrySubentity'][0];

      const stateCode = deepSearchItems(
        result,
        'cac:Address',
        (key, value) => true
      )[1]['cac:Address'][0]['cbc:CountrySubentityCode'][0];

      const address_line1 = deepSearchItems(
        result,
        'cbc:Line',
        (key, value) => true
      )[0][2];

      const country = deepSearchItems(
        result,
        'cac:Country',
        (key, value) => true
      )[2]['cac:Country'][0]['cbc:Name'][0]['_'];

      console.log(
        deepSearchItems(result, 'cac:Country', (key, value) => true)[2][
          'cac:Country'
        ][0]['cbc:Name'][0]['_']
      );
    });
  }
}
module.exports = XML;
