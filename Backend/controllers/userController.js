const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ error: 'User already exists' });

        user = new User({ firstName, lastName, email, phone, password });
        await user.save();

        res.json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ error: "User not found" });

        const otp = Math.floor(100000 + Math.random() * 900000); // Generate OTP
        console.log("Generated OTP:", otp);

        // Ensure OTP fields are stored correctly
        user.resetOTP = otp;
        user.resetOTPExpire = Date.now() + 10 * 60 * 1000; // Set expiry time (10 minutes)
        await user.save(); // Save the user document

        await sendEmail(email, "Password Reset OTP", `Your OTP is: ${otp}`);

        res.json({ message: "OTP sent to your email" });
    } catch (error) {
        console.error("Forgot Password Error:", error);
        res.status(500).json({ error: "Server error" });
    }
};



exports.verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            console.log("User not found for email:", email);
            return res.status(404).json({ error: "User not found" });
        }

        console.log("🔹 Received OTP:", otp);
        console.log("🔹 Stored OTP:", user.resetOTP);
        console.log("🔹 OTP Expiry Time:", new Date(user.resetOTPExpire));
        console.log("🔹 Current Time:", new Date());

        if (!user.resetOTP || !user.resetOTPExpire) {
            return res.status(400).json({ error: "OTP not found. Request a new one." });
        }

        if (user.resetOTP !== parseInt(otp)) {
            console.log("❌ OTP does not match! Received:", otp, "Stored:", user.resetOTP);
            return res.status(400).json({ error: "Invalid OTP" });
        }

        if (user.resetOTPExpire < Date.now()) {
            console.log("❌ OTP has expired!");
            return res.status(400).json({ error: "OTP has expired" });
        }

        // Clear OTP fields after successful verification
        user.resetOTP = null;
        user.resetOTPExpire = null;
        await user.save();

        console.log("✅ OTP verified successfully!");
        res.json({ message: "OTP verified successfully" });
    } catch (error) {
        console.error("❌ Verify OTP Error:", error);
        res.status(500).json({ error: "Server error" });
    }
};




exports.resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ error: 'User not found' });

        user.password = newPassword;
        await user.save();

        res.json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
