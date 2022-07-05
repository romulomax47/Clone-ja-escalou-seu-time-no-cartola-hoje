const {BASE_URL, fetchMarketStatus}= require('../../src/api/cartola')
const axios = require('axios')


jest.mock('axios')

describe('gey mercado status', () => {

    it('return data', () => {
    
        expect(fetchMarketStatus()).toBe(data) 
    })


})