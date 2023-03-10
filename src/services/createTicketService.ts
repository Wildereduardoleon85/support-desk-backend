import { TicketModel } from '../models'
import { AuthRequest, ServiceResponse, Ticket } from '../types'

export const createTicketService = async (
  req: AuthRequest
): Promise<ServiceResponse<Ticket>> => {
  if (!req.user) {
    throw new Error('internal server error')
  }

  const ticket = await TicketModel.create({
    ...req.body,
    user: req.user._id,
  })

  return {
    data: ticket,
    statusCode: 201,
    error: null,
  }
}
