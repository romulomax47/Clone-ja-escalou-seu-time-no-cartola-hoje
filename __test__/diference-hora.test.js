const  moment= require('moment');
const {diffeInHour} = require("../src/bot");
const {marketStatusCloseAfternoon, marketStatusCloseEvenig} = require('../__mock__/mock-cartola')

describe('differencei in hora igual ao alvo', ()=> {
    const payload = marketStatusCloseAfternoon

    it('deveria retorna falseporque adiferenca não é igual 1 hor', async ()=> {

        const currentDate = moment('2022-07-07 14:59')

        expect(diffeInHour(payload, currentDate, 1)).toBe(false)
    })
    it('should return false because the diff not egual to 3 hour', async () => {
        const currentDate = moment('2022-07-07 13:00')

        expect(diffeInHour(payload, currentDate, 1)).toBe(false)
    })
    it('should return true because the diff is equal to 3 hors', async () =>{
        const currentDate = moment('2022-07-07 13:00')

        expect(diffeInHour(payload, currentDate, 3)).toBe(true)

    })

    it('should return true because the diff is equal to 6 hors', async () =>{
        const currentDate = moment('2022-07-07 10:00')

        expect(diffeInHour(payload, currentDate, 6)).toBe(true)

    })

    it('should return true because the diff is equal to 12 hors', async () =>{
        const currentDate = moment('2022-07-07 04:00')

        expect(diffeInHour(payload, currentDate, 12)).toBe(true)

    })

}) 