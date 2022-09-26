// const fs = require('fs');
// const pdfParse = require('pdf-parse');

const XLSX = require("xlsx");

const workbook = XLSX.readFile("./test.xlsx");
console.log(workbook.Sheets);