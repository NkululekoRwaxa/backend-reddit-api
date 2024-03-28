import db  from './../models/index.js'

const postController = {}
postController.post = (req,res)=>{
    const{title, link, text, userId} = req.body 
    
    const post = new db.Post({
        title:title, 
        link:link, 
        text:text, 
        _creator:userId,
    })

    post.save().then((newPost)=>{
        return res.status(200).json({
            success:true, 
            data:newPost
        })
    }).catch((error)=>{
        return res.status(500).json({message:error})
    })
}

// get post by id
postController.getById = (req, res)=>{
    db.Post.findById(req.params.id).then((post)=>{
        return res.status(200).json({
            success:true,
            data:post
        })
    }).catch((error)=>{
        return res.status(500).json({message:error})
    })
}

// get all posts
postController.getAll = (req, res)=>{
    db.Post.find({})
    .populate({path:'_creator', select:'username-_id'})
    .populate({path:'_comments', select:'text created _creator', match:{'available':true}})
    .then((posts)=>{
        return res.status(200).json({
            success:true,
            data:posts
        })
    }).catch((error)=>{
        return res.status(500).json({
            message:error
        })
    })
}

export default postController