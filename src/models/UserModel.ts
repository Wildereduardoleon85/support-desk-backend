import { Schema, model } from 'mongoose'
import { User } from '../types'

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: [true, 'please add a name'],
    },
    email: {
      type: String,
      required: [true, 'please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'please add a password'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export const UserModel = model<User>('User', userSchema)
