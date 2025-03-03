const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careerSchema = new Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
    });

module.exports = mongoose.model('careerModel',careerSchema,'jobApplications');