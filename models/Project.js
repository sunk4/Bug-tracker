import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: [true, 'Please provide project name'],
      minlength: 1,
      maxlength: 50,
    },
    projectDescription: {
      type: String,
      required: [true, 'Please provide description of project'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    projectUsers: {
      type: Array,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Project', ProjectSchema)
