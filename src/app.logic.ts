import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const {b:base, l:limit, s:show} = yarg
console.log(yarg);

// const message: string = "Hola mundo!!!";
// console.log(message);
//?---------------------------------------
let outputMessage = '';
const headerMessage = `
=========================================
        Tabla del ${base}
=========================================

`

outputMessage = headerMessage + outputMessage;
if (show) {
    console.log(outputMessage);
}

