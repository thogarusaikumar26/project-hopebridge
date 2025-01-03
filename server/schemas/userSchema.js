const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String,
     required: true,
      unique: true 
  },
  password: { type: String,
     required: true 
  },
  role: { type: String, 
    enum: ["donor", "adopter", "admin"],
    default: "donor" 
  },
  preferences: {
    age: { type: Number,
      required: false
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: false,
    },
    location: { type: String, required: false },
  },
  createdAt: { type: Date, default: Date.now },
});
const user = mongoose.model("User", userSchema);
module.exports = user;
