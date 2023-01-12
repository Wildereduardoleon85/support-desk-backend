import { TicketModel } from '../../src/models/TicketModel'
import { UserModel } from '../../src/models/UserModel'
import { getTicketsService } from '../../src/services/getTicketsService'
import { AuthRequest } from '../../src/types'

jest.mock('../../src/models/UserModel')
jest.mock('../../src/models/TicketModel')

const mockedUserfindById = UserModel.findById as jest.Mock
const mockedTicketfind = TicketModel.find as jest.Mock

const req: any = {
  user: {
    _id: 'John Doe id',
  },
}

const tickets = [
  {
    _id: 'ticket id',
    user: 'user id',
    product: 'iPhone',
    description: 'the memory is broken',
    status: 'new',
  },
]

describe('getTicketsService', () => {
  describe('Given no user from request', () => {
    it('should return an error message and a status code of 500', async () => {
      req.user = null

      const response = await getTicketsService(req as AuthRequest)

      expect(response).toEqual({
        error: 'internal server error',
        statusCode: 500,
      })
    })
  })

  describe('Given no user from database', () => {
    it('should return an error message and a status code of 401', async () => {
      req.user = {
        _id: 'John Doe id',
      }

      mockedUserfindById.mockResolvedValueOnce(null)

      const response = await getTicketsService(req as AuthRequest)

      expect(response).toEqual({
        error: 'user not found',
        statusCode: 401,
      })
    })
  })

  describe('Given no user from database and request', () => {
    it('should return the tickets data and a status code of 200', async () => {
      mockedUserfindById.mockResolvedValueOnce(true)
      mockedTicketfind.mockResolvedValueOnce(tickets)

      const response = await getTicketsService(req as AuthRequest)

      expect(response).toEqual({
        data: tickets,
        error: null,
        statusCode: 200,
      })
    })
  })
})
