import { TicketModel, UserModel } from '../models'
import { AuthRequest, ServiceResponse, Ticket } from '../types'

export const updateTicketService = async (
  req: AuthRequest
): Promise<ServiceResponse<Ticket>> => {
  const { user: requestUser } = req
  const id = req.params.id

  const user = await UserModel.findById(requestUser?._id)

  if (!user) {
    return {
      error: 'user not found',
      statusCode: 401,
    }
  }

  const ticket = await TicketModel.findById(id)

  if (!ticket) {
    return {
      error: 'ticket not found',
      statusCode: 404,
    }
  }

  if (String(ticket.user) !== String(req.user?._id)) {
    return {
      error: 'not authorized',
      statusCode: 401,
    }
  }

  const updatedTicket = await TicketModel.findByIdAndUpdate(id, req.body, {
    new: true,
  })

  if (!updatedTicket) {
    throw new Error('database error')
  }

  return {
    data: updatedTicket,
    error: null,
    statusCode: 200,
  }
}
