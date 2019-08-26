const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    nickname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    image: String, 
    control_active: { type: Boolean, default: true }
    //related: [{ type: Schema.Types.ObjectId, ref:'Subscriptions', required:true }]
  },
  {
    timestamps: true //this will create createdAT and updatedAT
  }
);

module.exports = mongoose.model('Users', userSchema);
