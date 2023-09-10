
const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          
        console.log('connected to database'.green)
    } catch (error) {
        throw new Error(error);
    }
} 


module.exports = {connectDB}