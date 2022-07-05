const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios');

const BASE_URL = process.env.CARTOLA_API

async function fetchMarketStatus(){
    const data = await axios.get(`https://api.cartola.globo.com/mercado/status`).then(({data}) => data)
                            .catch((error) => error)
    
         if(data instanceof Error) {
            return data
         }
         const fechamentp = data.fechamento;
         const status_mercado = data.status_mercado;
         return {fechamentp, status_mercado};
} 



module.exports = {BASE_URL , fetchMarketStatus}