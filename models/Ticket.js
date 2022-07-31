import mongoose from 'mongoose'

const TicketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    ticketProjectId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project',
      required: true,
    },
    ticketTitle: {
      type: String,
      required: [true, 'Please provide title'],
      minlength: 1,
      maxlength: 50,
    },
    ticketDescription: {
      type: String,
      required: [true, 'Please provide description of ticket'],
    },
    ticketPriority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    ticketStatus: {
      type: String,
      enum: ['open', 'in progress', 'closed'],
      default: 'open',
    },
    ticketType: {
      type: String,
      enum: ['bug', 'error', 'featured request', 'other'],
      default: 'bug',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Ticket', TicketSchema)
