import mongoose from "mongoose";

const{Schema} = mongoose
mongoose.Promise = global.Promise

const commentSchema = new Schema({
    text:{type:String, required:true},
    available:{type:Boolean, default:true}, // true-comment available, false-comment deleted
    createdAt:{type:Date, default:Date.now()},
    _creator:{type:Schema.ObjectId, ref:'User'},
    _post:{type:Schema.ObjectId, ref:'Post'}
})

// add pre-hook function-automatically populate creator
const populateCreator = function(next){
    this.populate({
        path:'_creator',
        select:'username created-_id'
    })
    next()
}
commentSchema.pre('find', populateCreator)


const Comment = mongoose.model('Comment', commentSchema)
export default Comment