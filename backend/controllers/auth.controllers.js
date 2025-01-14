import { hash } from 'crypto';
import bcrypt from 'bcryptjs';

import { generateVerificationCode } from '../utils/generateVerificationCode.js';
import {User} from '../models/user.model.js';


export const signup = async (req, res) => {
    const { name, email, password } = req.body;


    try {
        if(!email || !password || !name) {
            throw new Error("All fields are required");    
        }

        // check if user already exist
        const userAlredyExist = await User.findOne({ email });
        if(userAlredyExist) {
            throw new Error("User already exist");
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);  

        // generate verification token
        const  verificationToken = generateVerificationCode();
        // create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 6 * 60 * 60 * 1000  // 6 hours
        });
        await user.save();


        // create jwt token
        generateTokenAndSetCookie(res, user._id);



    } catch (error) {
        
        res.status(400).json({success: false, message: error.message });


    }
    
}


export const login = async (req, res) => {
    
    
}

export const logout = async (req, res) => {
    

}