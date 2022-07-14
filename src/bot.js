
const { isModOf, sameOf } = require("./helper/math")
const { difference } = require("./helper/date")
const { MARKET_STATUS } = require('./const')

function isTheMarketOpen(status) {
    return status === MARKET_STATUS.open
}


function diffeInHour(data, dataFormaTBr, target) {
    const diffInMinute = difference(data, dataFormaTBr, 'm')
    const diffInHour = difference(data, dataFormaTBr, 'h')
    return sameOf(diffInHour, target) && isModOf(diffInMinute, 60, 0)
}

function diffInMinute(data, dataFormaTBr, target) {
    const diffMinute = difference(data, dataFormaTBr, 'm')
    return sameOf(diffMinute, target)
}

function isExctHour(data, dataFormaTBr) {
    return diffeInHour(data, dataFormaTBr, 48)
        || diffeInHour(data, dataFormaTBr, 24)
        || diffeInHour(data, dataFormaTBr, 12)
        || diffeInHour(data, dataFormaTBr, 6)
        || diffeInHour(data, dataFormaTBr, 3)
        || diffeInHour(data, dataFormaTBr, 1)
}
function isExactMinute(data, dataFormaTBr) {
    return diffInMinute(data, dataFormaTBr, 45)
        || diffInMinute(data, dataFormaTBr, 30)
        || diffInMinute(data, dataFormaTBr, 15)
}
function isExactPeriod(data, dataFormaTBr) {
    return isExctHour(data, dataFormaTBr)
        || isExactMinute(data, dataFormaTBr)
}

function canSendMessage(data, dataFormaTBr) {
    return isExactPeriod(data, dataFormaTBr) && isTheMarketOpen(data.status_mercado)
}

module.exports = { canSendMessage, diffeInHour, diffInMinute }