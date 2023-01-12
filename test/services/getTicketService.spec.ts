import { getTicketService } from '../../src/services/getTicketService'
import { UserModel } from '../../src/models/UserModel'
import { AuthRequest } from '../../src/types'
import { TicketModel } from '../../src/models/TicketModel'

jest.mock('../../src/models/UserModel')
jest.mock('../../src/models/TicketModel')

const mockedUserFindById = UserModel.findById as jest.Mock
const mockedTicketFindById = TicketModel.findById as jest.Mock

const req: any = {
  user: {
    _id: 'John Doe id',
  },
  params: {
    id: 'ticketId',
  },
}

const ticket = {
  product: 'iPhone',
  description: 'the screen is broken',
}

describe('getTicketservice', () => {
  describe('Given no user from request', () => {
    it('should return an error and a status code of 500', async () => {
      req.user = undefined

      const response = await getTicketService(req as AuthRequest)

      expect(response).toEqual({
        error: 'internal server error',
        statusCode: 500,
      })
    })
  })

  describe('Given no user from database', () => {
    it('should return an error and a status code of 401', async () => {
      req.user = {
        _id: 'John Doe id',
      }

      mockedUserFindById.mockResolvedValueOnce(null)

      const response = await getTicketService(req as AuthRequest)

      expect(response).toEqual({ error: 'user not found', statusCode: 401 })
    })
  })

  describe('Given no ticket', () => {
    it('should return an error and a status code of 404', async () => {
      mockedTicketFindById.mockResolvedValueOnce(null)
      mockedUserFindById.mockResolvedValueOnce(true)

      const reqArg = req as AuthRequest

      const response = await getTicketService(reqArg)

      expect(response).toEqual({ error: 'ticket not found', statusCode: 404 })
    })
  })

  describe('Given ticket.user different from req.user._id', () => {
    it('should return an error and a status code of 401', async () => {
      mockedTicketFindById.mockResolvedValueOnce({ ...ticket, user: 'Sam id' })
      mockedUserFindById.mockResolvedValueOnce(true)

      const reqArg = req as AuthRequest

      const response = await getTicketService(reqArg)

      expect(response).toEqual({ error: 'not authorized', statusCode: 401 })
    })
  })

  describe('Given user, ticket and user validation ok', () => {
    it('should return the ticket data with a status code of 200', async () => {
      mockedTicketFindById.mockResolvedValueOnce({
        ...ticket,
        user: 'John Doe id',
      })
      mockedUserFindById.mockResolvedValueOnce(true)

      const reqArg = req as AuthRequest

      const response = await getTicketService(reqArg)

      expect(response).toEqual({
        data: {
          description: 'the screen is broken',
          product: 'iPhone',
          user: 'John Doe id',
        },
        error: null,
        statusCode: 200,
      })
    })
  })
})
