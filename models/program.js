const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    category: {
        type: String,
    },
    name: {
        type: String,
        
    },
    reps: { 
        type: Number,
    },
    load: {
        type: Number,
    },
    actual_reps: {
        type: Number,
    },
    actual_load: {
        type: Number,
    },
})

const programSchema = new Schema({
    day: {
        type: String,
        enum: ['DAY 1', 'DAY 2', 'DAY 3', 'DAY 4', 'DAY 5', 'DAY 6']
    },
    week: {
        type: String,
        enum: ['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4', 'WEEK 5', 'WEEK 6', 'WEEK 7']
    },
    exercises: [exerciseSchema]

})

module.exports = mongoose.model('Program', programSchema);