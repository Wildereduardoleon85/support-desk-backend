import { Router } from 'express'
import {
  createTicket,
  getTicket,
  getTickets,
} from '../controllers/ticketsController'
import { protect, createTicketValidation } from '../middlewares'

const ticketRoutes: Router = Router()

ticketRoutes
  .route('/')
  .get(protect, getTickets)
  .post(protect, createTicketValidation, createTicket)

ticketRoutes.route('/:id').get(protect, getTicket)

export { ticketRoutes }
