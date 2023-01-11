const mongoose = require("mongoose");

const OnGoingDrillSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    category: {
        type: Number,
        require: true
    },
    repetation: {
        type: Number,
        require: true
    },
    sets: {
        type: Number,
        require: true
    },
    videos: [{
        type: String,
        require: true
    }],
    recommendation:{
        anecdote_no: {
            type:Number
        },
        mesage : {
            type:String
        },
        audioFile : [{
            type:String
        }],
        audiolength : {
            type:String
        },
        createdat :{
            type:String
        },
        manual :{
            type: String
        }
    },
    remarks:{
        type:String,
        require:true
    },
    score:{
        type:Number,
        require:true
    }
}, { timestamps: true });

module.exports = mongoose.model("OnGoingDrill", OnGoingDrillSchema)

