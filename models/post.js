import mongoose from "mongoose";

const {Schema} = mongoose
mongoose.Promise = global.Promise

const postSchema = new Schema({
    title:{type: String, required: true},
    link: String,
    text: String,
    available:{type: Boolean, default:true}, // true-available post, false-deleted post
    created:{type:Date, default:Date.now()},
    _creator: {type:Schema.ObjectId, ref:'User'},
    _comments:[{type:Schema.ObjectId, ref:'Comment'}]
})

const Post = mongoose.model("Post", postSchema)
export default Post
