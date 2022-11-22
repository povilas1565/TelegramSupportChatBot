const creds = require('./creds.json')
const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('128ZioPPh1qhKYO8nAZ6rVk0w83voyqU6lV2945r34pQ') //Заказчика

module.exports = async function(sheet, ctx) {
    await doc.useServiceAccountAuth({
        client_email: creds.client_email, 
        private_key: creds.private_key
    })
    await doc.loadInfo();
    var sheet = doc.sheetsByTitle[sheet]
    await sheet.loadCells()
    sheet.addRow([ctx.chat.id, ctx.from.username])
    sheet.saveUpdatedCells()
}