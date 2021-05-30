
function getHeaderRow() {
    // requires an env.ts file with the contents: const env = {MAIN_SPREADSHEET_ID : "your-spreadsheet-id"};
    var spred = SpreadsheetApp.openById(env.MAIN_SPREADSHEET_ID);
    SpreadsheetApp.setActiveSpreadsheet(spred);
    let sheet = spred.getSheetByName("Main Spreadsheet") as GoogleAppsScript.Spreadsheet.Sheet;
    let last = sheet.getLastColumn()
    let range = sheet.getRange(1,1,1,last)
    let values = range.getValues();
    return JSON.stringify(values);
}