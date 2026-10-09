
const express = require("express")
const { allUsers, singleUser, addUser, updateUser, removeUser } = require("../controllers/userController")

const router = express.Router()

router.get("/", allUsers)
router.get("/:id", singleUser)
router.post("/", addUser)
router.put("/:id", updateUser)
router.delete("/:id", removeUser)


module.exports = router
