const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '30d',
    });
};

// @desc    Register new student
// @route   POST /api/auth/register/student
// @access  Public
const registerStudent = async (req, res) => {
    try {
        const {
            name, username, email, password,
            skills, availability, location, locationType,
            bio
        } = req.body;

        // Validation
        if (!name || !username || !email || !password || !skills || !availability || !location || !locationType) {
            return res.status(400).json({ message: 'Please add all required fields' });
        }

        // Privacy Check: Username should not contain name parts
        const nameParts = name.toLowerCase().split(' ');
        const isPrivacyViolated = nameParts.some(part => part.length > 2 && username.toLowerCase().includes(part));

        if (isPrivacyViolated || username.toLowerCase() === name.toLowerCase()) {
            return res.status(400).json({
                message: 'For privacy, your username cannot contain your real name.'
            });
        }

        // Check user exists
        const userExists = await User.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create user
        const user = await User.create({
            name,
            username,
            email,
            password,
            role: 'student',
            skills,
            availability,
            location,
            locationType,
            bio
        });

        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Register new company
// @route   POST /api/auth/register/company
// @access  Public
const registerCompany = async (req, res) => {
    try {
        const { name, email, password, bio, establishedYear } = req.body;

        if (!name || !email || !password || !bio || !establishedYear) {
            return res.status(400).json({ message: 'Please add all required fields' });
        }

        // Check user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Company already registered' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role: 'company',
            bio,
            establishedYear
        });

        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for user email
        const user = await User.findOne({ email }).select('+password');

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user.id,
                name: user.name,
                username: user.username, // undefined for company
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerStudent,
    registerCompany,
    loginUser
};
