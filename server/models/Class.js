const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    startTime: String,
    endTime: String,
    instructor: String
});

module.exports = mongoose.model('Class', classSchema);


