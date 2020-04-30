const { GoogleSpreadsheet } = require('google-spreadsheet');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1Nw3UOKfCNLBk8hdu5tnmEyw_mDJWzhTF7qZcx_SYkrE');
/*
// use service account creds
await doc.useServiceAccountAuth({
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY,
});
*/
// OR load directly from json file if not in secure environment
await doc.useServiceAccountAuth(require('./files/client_secret.json'));
// OR use API key -- only for read-only access to public sheets
doc.useApiKey('AIzaSyDfx14quJi6YKcYE_qE7GxVZmDDmtRCDho');

await doc.loadInfo(); // loads document properties and worksheets
console.log(doc.title);
await doc.updateProperties({ title: 'renamed doc' });
/*
const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
console.log(sheet.title);
console.log(sheet.rowCount);
*/
// adding / removing sheets
const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
await newSheet.delete();