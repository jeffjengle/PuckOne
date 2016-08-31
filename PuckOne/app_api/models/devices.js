var mongoose = require('mongoose');

var deviceSchema = new mongoose.Schema({
    temperature: {
        type: String,
        required: true
    }
});

mongoose.model('Device', deviceSchema);