const student = require('../models/studentSchema');
const asyncHandler = require('../util/asyncHandler');

const createStudent = asyncHandler(async (req,res) => {
    const {name, email, password, dob} = req.body;

    const studentExit = await student.findOne({email});
    if (studentExit) {
        res.status(400);
        throw new Error ("Student Already enrolled")
    }

    const newstudent = await student.create({name, email, password, dob});
    res.status(201).json(newstudent);
});

module.exports = createStudent;