const creds = require('./creds.json')
const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('128ZioPPh1qhKYO8nAZ6rVk0w83voyqU6lV2945r34pQ') //Заказчика


module.exports = class Sheet {

    constructor() {
        doc.useServiceAccountAuth({
            client_email: creds.client_email,
            private_key: creds.private_key
        })
        doc.loadInfo();
    }

    _save(title, ctx) {
        this._search(title, ctx.chat.id).then(function (row) {
            if (row==false) {
                let sheet = doc.sheetsByTitle[title]
                sheet.addRow({ id: ctx.chat.id, user: ctx.from.username });
            }
        });
    }

    _delete(title, number,) {
        let sheet = doc.sheetsByTitle[title]
        sheet.getRows().then(function (rows) {
            rows[number].delete();
        });
    }


    _get(title, ctx) {
        let sheet = doc.sheetsByTitle[title]
        sheet.loadCells()
        sheet.addRow([ctx.chat.id, ctx.from.username])
        sheet.saveUpdatedCells()
    }

    _update(title, number, key, value) {
        let sheet = doc.sheetsByTitle[title]
        sheet.getRows().then(function (rows) {
            rows[number][key] = value;
            rows[number].save();
        });
    }

    _search(title, value) {


        // this.searchSheet2 = doc.sheetsByTitle["Нажали старт"]
        // this.searchSheet2.addRow({ id: 32123, user: "dasda" })
        // this.rows2 = this.searchSheet2.getRows().then((rows2) => 
        // console.log(rows2[0].id))


        let searchSheet = doc.sheetsByTitle[title]
        return searchSheet.getRows().then(function (rows) { //let rows =  .then(function(result) {  .then((rows) => function() { 
            for (let i = 0; i < rows.length; i++) {
                //console.log(rows.length);
                if (rows[i].id == value) {
                    console.log(rows[i].id);
                    return [i, rows[i]]; //[1, 2, 3, 4, 5];
                }
            }
            console.log('false');
            return false;
        });
    }
}