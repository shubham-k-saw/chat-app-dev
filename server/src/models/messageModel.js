import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    trim: true,
  },
  file: {
    type: String,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  seenTime: {
    type: Date
  },
  deletedFor: {
    type: String,
    enum: ['SENDER', 'RECEIVER', 'BOTH']
  },
})

messageSchema.index({ sender: 1, receiver: 1, time: -1 })

const Message = mongoose.model('Message', messageSchema)

export { Message }