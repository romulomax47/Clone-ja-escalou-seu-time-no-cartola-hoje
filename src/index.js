const dotenv = require("dotenv")
dotenv.config()
const moment = require("moment")
const {sendMessage} = require('./api/telegram')
const {fetchMarketStatus, BASE_URL } = require('./api/cartola')
const {canSendMessage} = require("./bot")

async function main (){
    const data = await  fetchMarketStatus(); 
    console.log(data)
    const dataFormaTBr = moment().format('YYYY-MM-DD HH:mm')

    if(canSendMessage(data, dataFormaTBr)){
        await sendMessage()
    }
    return console.log("merdaco fechado");
    
    

}
main()