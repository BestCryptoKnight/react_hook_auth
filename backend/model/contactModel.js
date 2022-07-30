import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: String,
  email: String,
  phoneNo1: String,
  phoneNo2: String,
  address: String,
  selectedImage: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
