import db from './../models/index.js'

const commentController = {}

commentController.post = (req,res)=>{
    const{text, userId, postId} = req.body

    const comment = new db.Comment({
        text:text,
        _creator:userId,
        _post:postId
    })

    // new comment object
    comment.save().then((newComment)=>{
        db.Post.findByIdAndUpdate(postId, {$push:{'_comments':newComment._id}})
        .then((existingPost)=>{
            res.status(200).json({
                success:true,
                data:newComment,
                existingPost
            })
        }).catch((e)=>{
            res.status(500).json({message:e})
        })
    }).catch((error)=>{res.status(500).json({message:error})})

}

export default commentController