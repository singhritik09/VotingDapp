const mongoose = require("mongoose");

const Voter = new mongoose.Schema({
    name:{
         type: String,
         required: true
        },
    vid:
    {
        type: String,
        required: true,
        unique:true
    },
})

const collection = new mongoose.model("VotersTable", Voter);

module.exports = collection;