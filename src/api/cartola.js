const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios')

const BASE_URL = process.env.CARTOLA_API

async function fetchMarketStatus(){
   
    const data = await axios.get(`${BASE_URL}/mercado/status`).then(({data}) => data)
                            .catch((error) => error)
         if(data instanceof Error) {
            return data
         }
         const status_mercado = data.status_mercado
         const fechamento = data.fechamento
         return { status_mercado, fechamento}
} 



module.exports = {BASE_URL , fetchMarketStatus}