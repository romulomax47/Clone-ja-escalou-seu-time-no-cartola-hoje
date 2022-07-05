const dotenv = require("dotenv")
dotenv.config()
const moment = require("moment")
const   { leadingZeros} = require("./helper/string")
const {fetchMarketStatus, BASE_URL } = require('./api/cartola')
//test
const {getClosingDate} = require("./helper/date")
// const axios = require('axios');


async function main (){
    const data = await  fetchMarketStatus(); 
    const dataFormaTBr = moment().format('DD/MM/YYYY HH:mm')
    console.log(data)
    // console.log(dataFormaTBr)
        // return console.log(fetchMarket)

    return console.log(getClosingDate(data)) 

}
main()