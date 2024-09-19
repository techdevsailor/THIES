const mongoose = require('mongoose')
const studentSchema = mongoose.Schema (
{
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    dob: {type: Date}
},
{
    timestamps: true,
}

);

const student = mongoose.model("Student", studentSchema);
module.exports = student