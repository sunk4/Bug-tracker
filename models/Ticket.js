import mongoose from 'mongoose'

const TicketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    project: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Please provide title'],
      minlength: 1,
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, 'Please provide description of ticket'],
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    status: {
      type: String,
      enum: ['open', 'in progress', 'closed'],
      default: 'open',
    },
    type: {
      type: String,
      enum: ['bug', 'error', 'featured request', 'other'],
      default: 'bug',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Ticket', TicketSchema)
