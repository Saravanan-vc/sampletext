const monogoose = require('mongoose');

const schema = monogoose.Schema({
    name : {
        type:String,
        required:true,
        trim:true
    },
    phone : {
        type:Number,
        required:true,
        unique:true
    },
});

module.exports = monogoose.model("users",schema);