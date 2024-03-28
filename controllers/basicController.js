const basicController = {}
basicController.get = (req,res)=>{
    res.json({
        message:"Welcome to Reddit API"
    })
}
export default basicController