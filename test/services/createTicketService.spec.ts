import { TicketModel } from '../../src/models/TicketModel'
import { createTicketService } from '../../src/services/createTicketService'
import { AuthRequest } from '../../src/types'

jest.mock('../../src/models/TicketModel')

const mockedTicketModel = TicketModel.create as jest.Mock

const mockedTicket = {
  _id: 'some ticket id',
  user: 'some user id',
  product: 'iPhone',
  description: 'is broken',
  status: 'new',
}

const reqArg = {
  body: {
    product: 'iPhone',
    description: 'is broken',
  },
  user: {
    _id: 'some user id',
  },
} as AuthRequest

describe('createTicketService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  beforeAll(() => {
    mockedTicketModel.mockResolvedValue(mockedTicket)
  })

  it('should create a ticket', async () => {
    const ticket = await createTicketService(reqArg)

    expect(ticket).toEqual({
      data: mockedTicket,
      statusCode: 201,
      error: null,
    })
  })

  it('should call create mongoose method with the desired arguments', async () => {
    await createTicketService(reqArg)

    expect(mockedTicketModel).toHaveBeenCalledWith({
      description: 'is broken',
      product: 'iPhone',
      user: 'some user id',
    })
  })

  it('should throw an error if there is no user', async () => {
    delete reqArg.user

    try {
      await createTicketService(reqArg)
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })
})
