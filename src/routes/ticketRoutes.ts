import { Router } from 'express'
import { createTicket, getTickets } from '../controllers/ticketsController'
import { protect, createTicketValidation } from '../middlewares'

const ticketRoutes: Router = Router()

ticketRoutes
  .route('/')
  .get(protect, getTickets)
  .post(protect, createTicketValidation, createTicket)

export { ticketRoutes }
