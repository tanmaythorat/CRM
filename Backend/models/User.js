const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
    resetOTP: Number,  // Add OTP field
    resetOTPExpire: Date, // Add OTP expiration field
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
