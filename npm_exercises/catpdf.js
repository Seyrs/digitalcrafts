const PDFDocument = require('pdfkit');
const fs = require('fs');
const catFacts = require('cat-facts');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('./catfacts.pdf'));
//
doc.text(catFacts.random(),100,100);
doc.end();