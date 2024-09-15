import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    index: true,
  },
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

export { User }