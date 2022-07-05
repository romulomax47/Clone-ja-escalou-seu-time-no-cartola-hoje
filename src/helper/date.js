const moment = require('moment')
const {leadingZeros} = require('./string');


function getClosingDate(payload){
    const { fechamentp } = payload;
    const { ano } = fechamentp

    const mes = leadingZeros(fechamentp.mes, 2)
    const dia = leadingZeros(fechamentp.dia, 2)
    const hora = leadingZeros(fechamentp.hora, 2)
    const minuto = leadingZeros(fechamentp.minuto, 2)

    return console.log(`${ano}-${mes}-${dia}-${hora}:${minuto}`)
}







function difference(dadosStatus, dataFormaTBr, key){
    const closingDateTime = getClosingDate(payload)
}


module.exports = {getClosingDate}