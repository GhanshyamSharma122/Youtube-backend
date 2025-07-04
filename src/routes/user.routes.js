import { Router } from "express";
import { changeCurrentPassword, getCurrentUser, getUserChannelProfile, loginUser, logoutUser, refershAccessToken, registerUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)
router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refershAccessToken)
router.route("/get-current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account-details").post(verifyJWT, updateAccountDetails)
router.route("/update-user-avatar").post(
    verifyJWT,
    upload.single("avatar"),
    updateUserAvatar
)
router.route("/update-user-cover-image").post(
    verifyJWT,
    upload.single("coverImage"),
    updateUserCoverImage
)
router.route("/changepassword").post(
    verifyJWT,
    changeCurrentPassword
)
router.route("/get-user-channel-profile").post(
    verifyJWT,
    getUserChannelProfile
)
export default router