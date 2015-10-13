"use strict"

const scissors = require('scissors')
const fs = require('fs')

let pdf = scissors('./sample.pdf').pages(1)

pdf.pdfStream().pipe(fs.createWriteStream('./sample-page-1.pdf'))
