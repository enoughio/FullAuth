import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },


    lastLogin: {
        type: Date,
        default: Date.now
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    resetPasswordToken : String,
    resetPasswordExpiresAt: Date,   //after 1 hour
    verificationToken: String,
    verificationTokenExpiresAt: Date  //after 6 hour

}, { timestamps: true }); 


export const User = mongoose.model("User", userSchema);

