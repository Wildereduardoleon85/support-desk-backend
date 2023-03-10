import { TicketModel, UserModel } from '../models'
import { AuthRequest, ServiceResponse, Ticket } from '../types'

export const getTicketsService = async (
  req: AuthRequest
): Promise<ServiceResponse<Ticket[]>> => {
  const { user: requestUser } = req

  if (!requestUser) {
    return {
      error: 'internal server error',
      statusCode: 500,
    }
  }

  const user = await UserModel.findById(requestUser._id)

  if (!user) {
    return {
      error: 'user not found',
      statusCode: 401,
    }
  }

  const tickets = await TicketModel.find({ user: requestUser._id })

  return {
    data: tickets,
    error: null,
    statusCode: 200,
  }
}
