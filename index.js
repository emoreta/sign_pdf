import {sign}  from "pdf-signer";
//const fs = require('fs');
import fs from "fs";


const p12Buffer = fs.readFileSync("C:/ProjectNode/signPdf/3938589_identity.p12")
const pdfBuffer = fs.readFileSync("C:/ProjectNode/signPdf/test_quipu.pdf")

const signedPdf = sign(pdfBuffer, p12Buffer,'0999074589', {
  reason: '2',
  email: 'test@email.com',
  location: 'Location, LO',
  signerName: 'Test User',
  annotationAppearanceOptions: {
    signatureCoordinates: { left: 10, bottom: 10, right: 490, top: 200 },
    signatureDetails: [
      {
        value: 'Signed by: Kiss Béla',
        fontSize: 7,
        transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
      },
      {
        value: 'Date: 2019-10-11',
        fontSize: 7,
        transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
      },
    ],
  },
})

fs.writeFileSync("C:/ProjectNode/signPdf/signed.pdf",await  signedPdf)