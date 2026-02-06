const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [100, 'Title can not be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [1000, 'Description can not be more than 1000 characters']
    },
    skillsRequired: {
        type: [String],
        required: true
    },
    duration: {
        type: String,
        required: [true, 'Please specify duration (e.g., 3-7 days)']
    },
    price: {
        type: String, // Can be range or fixed
        required: [true, 'Please add compensation details']
    },
    status: {
        type: String,
        enum: ['open', 'closed', 'in-progress', 'completed'],
        default: 'open'
    },
    locationType: {
        type: String,
        enum: ['on-site', 'remote', 'hybrid'],
        default: 'remote'
    },
    applicants: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        status: {
            type: String,
            enum: ['applied', 'interviewing', 'accepted', 'rejected'],
            default: 'applied'
        },
        dateApplied: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Gig', gigSchema);
