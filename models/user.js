import mongoose from "mongoose";
import bcryt from 'bcryptjs'

const {Schema} = mongoose
const userSchema = new Schema({
    username:{
        type:String, 
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength:[4,'Password must be 4 or more characters']
    }
})

// add pre hook to encrypt password
userSchema.pre("save", function(next){
    let user = this
    bcryt.hash(user.password, 10).then(hash=>{
        user.password = hash
        next()
    }).catch(error=>{
        console.log('error hashing password:'+error.message)
        next(error)
    })
})

// compare hashed password
userSchema.methods.passwordComparison = function(inputPassword){
    let user = this
    return bcryt.compare(inputPassword, user.password)
}

const User = mongoose.model("User", userSchema)
export default User
