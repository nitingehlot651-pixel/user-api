const User = require("../model/user.Model")

const allUsers = async(req, res)=>{

    const page = Number(req.query.page)
    const limit = Number(req.query.limit)

    const skip = (page-1)*limit

    const users = await User.find().skip(skip).limit(limit)
    if(!users){
        res.status(409)
        throw new Error("users not found")
    }
    res.status(200).json(users)
}


const singleUser = async(req, res)=>{
    const {id} = req.params
    const user = await User.findById(id)
    if(!user){
        res.status(409)
        throw new Error("user not found")
    }
    res.status(200).json(user)
}


const addUser = async(req, res)=>{
    const {username, email, password, phone, isActive} = req.body

    if(!username || !email || !password || !phone){
        res.status(409)
        throw new Error("user not found")
    }

    const user = await User.create({
        username,
        email,
        password,
        phone,
        isActive
    })

    if(!user){
        res.status(400)
        throw new Error("user not created")
    }

    res.status(201).json(user)
}


const updateUser = async(req, res)=>{
    const {id} = req.params
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {new : true})
    if(!updatedUser){
        res.status(400)
        throw new Error("user not update")
    }
    res.status(200).json(updatedUser)
}


const removeUser = async(req, res)=>{
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.status(201).json({
        message : "User Deleted"
    })
}

module.exports = {allUsers, singleUser, addUser, updateUser, removeUser}