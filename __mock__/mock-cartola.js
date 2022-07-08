const {MARKET_STATUS} = require('../src/const')

const marketStatusCloseAfternoon = {
    status_mercado: 1,
    fechamento: {
      dia: 7,
      mes: 7,
      ano: 2022,
      hora: 16,
      minuto: 0,
      timestamp: 1657393200
    }
  }

  const marketStatusCloseEvenig = {
    status_mercado: 1,
    fechamento: {
      dia: 9,
      mes: 7,
      ano: 2022,
      hora: 16,
      minuto: 0,
      timestamp: 1657393200
    }
  }
  

  module.exports = {
    marketStatusCloseAfternoon,
    marketStatusCloseEvenig
  }