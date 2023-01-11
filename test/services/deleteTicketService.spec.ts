import { deleteTicketService } from '../../src/services/deleteTicketService'
import { AuthRequest } from '../../src/types'
import { UserModel } from '../../src/models/UserModel'
import { TicketModel } from '../../src/models/TicketModel'

jest.mock('../../src/models/UserModel')
jest.mock('../../src/models/TicketModel')

const mockedUserFindById = UserModel.findById as jest.Mock
const mockedTicketFindById = TicketModel.findById as jest.Mock
const mockedTicketFindByIdAndDelete = TicketModel.findByIdAndDelete as jest.Mock

const mockedReq = {
  params: {
    id: 'some query param ticket id',
  },
  user: {
    _id: 'some user id',
  },
} as unknown

const mockedUser = {
  _id: 'some user id',
  name: 'John Doe',
  email: 'jdoe@email.com',
  isAdmin: false,
}

const mockedTicket = {
  user: 'another user id',
  product: 'iPhone',
  description: 'is broken',
}

describe('deleteTicketService', () => {
  describe('When there is no user', () => {
    it('should return an error and a 401 status code', async () => {
      mockedUserFindById.mockResolvedValueOnce(false)

      const response = await deleteTicketService(mockedReq as AuthRequest)

      expect(response).toEqual({ error: 'user not found', statusCode: 401 })
    })
  })

  describe('When there is no ticket', () => {
    it('should return an error and a 404 status code', async () => {
      mockedUserFindById.mockResolvedValueOnce(mockedUser)
      mockedTicketFindById.mockResolvedValueOnce(null)

      const response = await deleteTicketService(mockedReq as AuthRequest)

      expect(response).toEqual({ error: 'ticket not found', statusCode: 404 })
    })
  })

  describe('When the owner of the ticket does not match with the one who makes the request', () => {
    it('should return a not authorized error with a 401 status code', async () => {
      mockedTicketFindById.mockResolvedValueOnce(mockedTicket)
      mockedUserFindById.mockResolvedValueOnce(mockedUser)

      const response = await deleteTicketService(mockedReq as AuthRequest)

      expect(response).toEqual({ error: 'not authorized', statusCode: 401 })
    })
  })

  describe('Given a successful validation of ticket and user', () => {
    it('should delete the ticket and resturn a 200 status code', async () => {
      mockedTicket.user = 'some user id'

      mockedUserFindById.mockResolvedValueOnce(mockedUser)
      mockedTicketFindById.mockResolvedValueOnce(mockedTicket)

      const response = await deleteTicketService(mockedReq as AuthRequest)

      expect(response).toEqual({ error: null, statusCode: 200 })
      expect(mockedTicketFindByIdAndDelete).toHaveBeenCalledWith(
        'some query param ticket id'
      )
    })
  })
})
