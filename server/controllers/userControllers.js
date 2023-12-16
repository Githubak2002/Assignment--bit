import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

// get all Users
export const getAllUsers = async (req,res) => {
    try{
        const allUsers = await userModel.find({});  
        return res.status(200).send({
            users_count:allUsers.length,
            success:true,
            msg:"All the users",
            allUsers
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            msg:"Error in Register Controller → ",
            err
        })
    }
    

}

// Register a user
export const registerController = async (req,res) => {
    try{
        // validation and existing user
        const {userName,email,password,employmentType,gender} = req.body;
        if(!userName || !email || !password){
            return res.status(400).json({
                success:false,
                msg:"All the fields are required"
            })
        }
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                msg:"User already exists, please Login"
            })
        }
        // new user added to DB
        const hashedPass = await bcrypt.hash(password,10);
        const newUser = await new userModel({userName,email,password:hashedPass,employmentType,gender});
        // const users = await userModel.find({});
        // const tUsers =  users.length;
        newUser.save();
        return res.status(201).json({
            success:true,
            // totalUsers:tUsers,
            msg:"User Created, Please login",
            newUser
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            msg:"Error in Register Controller → ",
            err
        })
    }
}

// Login a user
export const loginController = async (req,res) => {
    try{
        const {userName,password} = req.body;
        if(!userName || !password){
            return res.status(401).json({
                success:false,
                msg:"userName and password needed",
            })
        }
        const user = await userModel.findOne({userName});
        if(!user){
            return res.status(200).json({
                success:false,
                msg:"User not Registered",
            })
        }
        const correctPass = await bcrypt.compare(password,user.password);
        if(!correctPass){
            return res.status(200).json({    
                // status 401 not running
                success:false,
                msg:"User Name or password is incorrect",
            })
        }
        return res.status(200).json({      
            success:true,
            msg:"Logged in successfuly",
            user
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            msg:"Error in Login Controller → ",
            err
        })
    }
}       