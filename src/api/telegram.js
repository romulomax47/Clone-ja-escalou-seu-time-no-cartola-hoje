
const axios = require('axios')

// const app = express()
const dotenv = require('dotenv')
dotenv.config()

const telegramApi = process.env.TELEGRAM_API
const telegramChatId = process.env.TELEGRAM_CHAT_ID
const telegramMessage = process.env.TELEGRAM_MESSAGE
const telegramToken = process.env.TELEGRAM_TOKEN



   async function sendMessage() {
    
    console.log(telegramChatId)

    const api = `${telegramApi}/bot${telegramToken}/sendMessage`

    const response = await axios.post(api, {chat_id: `${telegramChatId}`, text: `${telegramMessage}` })
        .then(response => response.data)
        .catch(error => error)
        return response
}

module.exports = { sendMessage };
