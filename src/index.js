const dotenv = require("dotenv")
dotenv.config()
const {fetchMarketStatus, BASE_URL } = require('./api/cartola')
// const axios = require('axios');


async function main (){
    const fetchMarket = await  fetchMarketStatus();
    return console.log(fetchMarket)
}

main()