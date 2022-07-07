const CronJob = require('cron').CronJob
const job = new CronJob('* * * * * *', () => {
    main()
})
job.start()

const dotenv = require("dotenv")
dotenv.config()
const moment = require("moment")
const {sendMessage} = require('./api/telegram')
const {fetchMarketStatus} = require('./api/cartola')
const {canSendMessage} = require("./bot")

async function main (){
    const dataFormaTBr =  moment().format('YYYY-MM-DD HH:mm')
    const data = await fetchMarketStatus();
    
    console.log(data)
    if(canSendMessage(data, dataFormaTBr)){
        console.log("false")
    }
    else (await sendMessage())
    return 

}
main()