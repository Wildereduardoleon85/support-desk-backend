import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import { getTicketService } from '../services/getTicketService'
import { ServiceResponse, Ticket } from '../types'
import { createTicketService } from '../services/createTicketService'

/**
 * @desc  Get user tickets
 * @route GET /api/tickets
 * @acess private
 */
export const getTickets = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode } = await getTicketService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Creates a ticket
 * @route POST /api/tickets
 * @acess private
 */
export const createTicket = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode }: ServiceResponse<Ticket> =
      await createTicketService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)
