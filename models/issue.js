const mongoose = require('mongoose');


const issueSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    label:{
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    ofproject : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'project'
    }
},{
   timestamps:true
})


module.exports = mongoose.model('issues',issueSchema);

// const { Schema, model } = require("mongoose");

// creating the schema
// const performanceSchema = new Schema(
//   {
//     reviewBy: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//     reviewFor: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//     ranking:{
//       type:Number,
//       min: [1, "minimum ranking 1 is lowest"],
//       max: [10, "higest ranking is 10"],
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     feedback: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Feedback",
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );
// // creating model from the schema
// const Performance = model("Performance", performanceSchema);
// module.exports = Performance;