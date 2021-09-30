const axios = require('axios');
const fs = require('fs');
const XML = require('./XML');
const { Base64 } = require('js-base64');

const start = async () => {
  try {
    const req = await axios.get(
      `https://apivp.efacturacadena.com/v1/vp/consulta/documentos?nit_emisor=900170501&id_documento=2748&codigo_tipo_documento=01&prefijo=`,
      {
        headers: {
          'Content-Type': 'text/plain',
          'Partnership-Id': '',
          efacturaAuthorizationToken: '',
          // efacturaAuthorizationToken: '',
        },
      }
    );
    const doc = Base64.decode(req.data.document);
    console.log(doc);
    const xm = new XML(doc);
    fs.writeFileSync('test.xml', doc);
    // fs.writeFileSync('data.txt', JSON.stringify(results));
    fs.writeFileSync('doc.txt', req.data.document);
  } catch (error) {
    console.log(error);
    console.log(error.response.data);
  }
};
start();
