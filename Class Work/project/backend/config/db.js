const mongoose = require('mongoose')

const connectDB = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connect Hogya ha ALLAH ALLAH Kr k');
    }   catch (error) {
        console.error(`error: ${error.massage}`);
        process.exit();
    }
};

module.exports = connectDB