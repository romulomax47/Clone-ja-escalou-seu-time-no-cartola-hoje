const dotenv = require("dotenv")
dotenv.config()
const moment = require("moment")
const {fetchMarketStatus, BASE_URL } = require('./api/cartola')
// const axios = require('axios');


async function main (){
    const fetchMarket = await  fetchMarketStatus(); 
    const dataFormaTBr = moment().format('DD/MM/YYYY HH:mm')
    console.log(dataFormaTBr)
        return console.log(fetchMarket)
}

main()