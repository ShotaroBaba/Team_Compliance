var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FormSchema = new Schema({
    "email": {
        type: String
    },
    "name": {
        type: String
    },
    "dob": {
        type: Date
    },
    "employee_startDate": {
        type: String
    },
    "modern_awards": {
        type: String
    },
    "employmentStatus": {
        type: String
    },
    "EmploymentLevel": {
        type: String
    }
});

module.exports = mongoose.model('form', FormSchema);