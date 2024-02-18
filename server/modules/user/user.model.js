const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'editor', 'moderator'], // Customize roles as needed
    default: 'user',
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other', 'not specified'], // Customize genders as needed
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => /\S+@\S+\.\S+/.test(email),
      message: 'Invalid email format',
    },
},
mobile: {
    type: String,
    required: false,
    unique: false,
    // validate: {
    //   validator: (mobile) => /\d{10}/.test(mobile), // Assumes 10 digit mobile number
    //   message: 'Invalid mobile number format',
    // },
  },
  
}, {timestamps: true });

userSchema.indexes({ email: 1 , mobile: 0}, { unique: true }); // Optional compound index for uniqueness

module.exports = mongoose.model('User', userSchema);
