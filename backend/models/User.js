const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    link: { type: String },
    image: { type: String } // URL to image
});

const certificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: Date },
    link: { type: String },
    image: { type: String }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false // Don't return password by default
    },
    role: {
        type: String,
        enum: ['student', 'company'],
        required: true
    },
    // Student Specific Fields
    username: {
        type: String,
        unique: true,
        sparse: true // Allows null/undefined to not conflict uniqueness
    },
    skills: {
        type: [String],
        // Validator to ensure max 3 skills if needed, though frontend handles dropdowns
    },
    availability: {
        type: String // e.g., 'Weekends', 'Daily'
    },
    location: {
        type: String
    },
    locationType: {
        type: String,
        enum: ['on-site', 'remote', 'hybrid', '']
    },
    projects: [projectSchema],
    certifications: [certificationSchema],

    // Common
    bio: {
        type: String,
        maxlength: [500, 'Bio can not be more than 500 characters'] // Increased for Company Bio (300 words could be long, assuming chars here)
    },
    profilePic: {
        type: String,
        default: 'no-photo.jpg'
    },

    // Company Specific Fields
    establishedYear: {
        type: Number
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
