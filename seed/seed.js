require("dotenv").config()
const User = require("../model/user.Model")

const dbConnect = require("../config/userConfig")
const data = require("./users")

const addManyUser = async()=>{
    dbConnect()
    await User.deleteMany()
    console.log("old record deleted")
    const users = await User.insertMany(data)
    console.log(users.length)
    // await User.updateMany({},
    //     {
    //         $set :{
    //             isActive : false
    //         }
    //     }
    // )
}

// const updateManyUser = async()=>{
//     dbConnect()
//     await User.updateMany({},
//         {
//             $set : {
//                 username : "bmw"
//             }
//         }
//     )

//     console.log("username updated to bmw")
// }

addManyUser()
// updateManyUser()