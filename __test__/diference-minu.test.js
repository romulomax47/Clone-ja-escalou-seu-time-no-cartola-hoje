const {diffInMinute} = require('../src/bot')
const  moment= require('moment');
const {marketStatusCloseAfternoon, marketStatusCloseEvenig} = require('../__mock__/mock-cartola')



describe('diference in minute ', ()=>{
    const payload = marketStatusCloseAfternoon

    it('should return false because the diff in minu not is equals to 56 ', () =>{
        const currentDate = moment('2022-07-14  15:05')
        expect(diffInMinute(payload, currentDate, 56)).toBe(false)
    })

    it('should return false because the diff in minu not is equals to 60 ', () =>{
        const currentDate = moment('2022-07-14 15:00')
        expect(diffInMinute(payload, currentDate, 60)).toBe(true)
    })

    it('should return true because the diff in min is equals to 30 ', () =>{
        const currentDate = moment('2022-07-14 15:30')
        expect(diffInMinute(payload, currentDate, 30)).toBe(true)
    })

    it('should return true because the diff in min is equals to 15 ', () =>{
        const currentDate = moment('2022-07-14 15:45')
        expect(diffInMinute(payload, currentDate, 15)).toBe(true)
    })


})
