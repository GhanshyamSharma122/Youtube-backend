import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser=asyncHandler(async (req,res) => {
     res.status(200).json({
        message:"ok"
    })
    console.log("just receive a  request from the client")
})

export {registerUser}