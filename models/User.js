import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide first name'],
    minlength: 1,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide last name'],
    minlength: 1,
    maxlength: 50,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: [true, 'Please provide phone number'],
    validate: {
      validator: validator.isMobilePhone,
      message: 'Please provide valid phone number',
    },
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['admin', 'senior', 'junior'],
    default: 'junior',
  },
})

UserSchema.pre('save', async function () {
  // console.log(this.isModified('password'))
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = bcrypt.compare(userPassword, this.password)
  return isMatch
}

export default mongoose.model('User', UserSchema)
