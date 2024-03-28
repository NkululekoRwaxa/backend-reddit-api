import db from './../models/index.js'

const userController = {}

// create/add user to db -  assume user enters correct inputs
userController.post = (req, res)=>{
    const{username, password} = req.body

    // new user instance
    const user = new db.User({username, password})
    user.save()
    .then((newUser)=>{
        res.status(200).json({
            success:true,
            data:newUser
        })
    })
    .catch((error)=>{ res.status(500).json({ message:error })})
}

export default userController