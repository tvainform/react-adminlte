const xlsx = require("xlsx");
const wb = xlsx.readFile("file.xlsx",{cellDates:true});

const ws = wb.Sheets["АСУТП"];

const data = xlsx.utils.sheet_to_json(ws)
//const data = xlsx.utils.sheet_to_json(ws);
//const data = xlsx.utils.sheet_to_html(ws);

console.log(data[0][2]);
