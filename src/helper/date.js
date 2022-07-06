const moment = require('moment')
const {leadingZeros} = require('./string');


function getClosingDate(payload){
    const { fechamento } = payload;
    const { ano } = fechamento;

    const mes = leadingZeros(fechamento.mes, 2)
    const dia = leadingZeros(fechamento.dia, 2)
    const hora = leadingZeros(fechamento.hora, 2)
    const minuto = leadingZeros(fechamento.minuto, 2)

    return moment(`${ano}-${mes}-${dia}-${hora}:${minuto}`)
}

function difference(payload, dataFormaTBr, key){
    const closingDateTime = getClosingDate(payload)
    return closingDateTime.diff(dataFormaTBr, key)

}


module.exports = {difference}