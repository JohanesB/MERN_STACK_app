const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'please insert a name']
    },
    DateOfBirth: {
        type: String,
        required: [true, 'please insert a date of birth']
    },
    Gender: {
        type: String,
        required: [true, 'please insert a gender']
    },
    Salary: {
        type: String,
        required: [true, 'please insert a salary']
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)