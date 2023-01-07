import { Schema, model } from 'mongoose'
import { Ticket } from '../types'

const ticketSchema = new Schema<Ticket>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: String,
      required: [true, 'please select a product'],
      enum: ['iPhone', 'Macbook Pro', 'iPad', 'iMac'],
    },
    description: {
      type: String,
      required: [true, 'please enter a description of the issue'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
)

export const TicketModel = model<Ticket>('Ticket', ticketSchema)
