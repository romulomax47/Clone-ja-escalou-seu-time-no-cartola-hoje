const axios = require('axios')
const {marketStatusCloseAfternoon} = require('../../__mock__/mock-cartola')
const {BASE_URL, fetchMarketStatus}= require('../../src/api/cartola')


jest.mock('axios')

describe('gey mercado status', () => {

    it('should return status and datelite limite', async () =>   {
        const mockCartolaResponse = {
            status_mercado: 1,
            fechamento: {
              dia: 9,
              mes: 7,
              ano: 2022,
              hora: 16,
              minuto: 0,
              timestamp: 1657393200
            }
          }
        axios.get.mockResolvedValueOnce({data: mockCartolaResponse})
        const result = await fetchMarketStatus()

        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/mercado/status`)
        
        expect(result).toEqual(marketStatusCloseAfternoon)

    })


})