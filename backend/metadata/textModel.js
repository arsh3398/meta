const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const textSchema = new Schema(
    {
        title: {type:String,required:true},
        body:{type:String,required:true},
        createdAt:{type:Date, default:Date.now},
        updatedAt:{type:Date, default:Date.now},
    });

module.exports = mongoose.model('textSchema',textSchema,'textData')