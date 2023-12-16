import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        userName:{
            type:String,
            required:[true, "Name is required"]
        },
        email:{
            type:String,
            required:[true, "Email is required"]
        },
        password:{
            type:String,
            required:[true, "Password is required"]
        },
        employmentType:{
            type:String,
            required:[true, "Employe type is required"]
        },
        gender:{
            type:String,
            required:[true, "Gender is required"]
        }
    },
    {
        timeSramp:true
    }
);

const userModel = mongoose.model("Users",userSchema);
export default userModel;
