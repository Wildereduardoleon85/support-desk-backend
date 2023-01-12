import { TicketModel, UserModel } from '../models'
import { AuthRequest, ServiceResponse, Ticket } from '../types'

export const getTicketService = async (
  req: AuthRequest
): Promise<ServiceResponse<Ticket>> => {
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

  const ticket = await TicketModel.findById(req.params.id)

  if (!ticket) {
    return {
      error: 'ticket not found',
      statusCode: 404,
    }
  }

  if (String(ticket.user) !== String(requestUser._id)) {
    return {
      error: 'not authorized',
      statusCode: 401,
    }
  }

  return {
    data: ticket,
    error: null,
    statusCode: 200,
  }
}
