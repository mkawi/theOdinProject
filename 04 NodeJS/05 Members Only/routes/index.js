const express = require("express");
const router = express.Router();

const Message = require("../models/message");

const userController = require("../controllers/userController");
const messageController = require("../controllers/messageController");

/* GET home page. */
router.get("/", function (req, res, next) {
	// Get all messages
	Message.find({})
		.populate("user")
		.exec(function (err, messages) {
			if (err) {
				return next(err);
			}

			res.render("index", { messages: messages.reverse() });
		});
});

/* *************** */
/* USER CONTROLLER */

/* GET login page. */
router.get("/login", userController.user_login_get);

/* POST login auth page */
router.post(
	"/login",
	userController.user_login_post,
	userController.user_login_auth_post
);

/* GET register page. */
router.get("/register", userController.user_register_get);

/* POST register page. */
router.post("/register", userController.user_register_post);

/* POST logout */
router.post("/logout", userController.user_logout_post);

/* GET user profile */
router.get("/profile", userController.user_profile_get);

/* POST membership code */
router.post("/code", userController.user_code_post);

/* GET user profile */
router.get("/user/:username", userController.user_otherProfile_get);

/* POST user delete account */
router.post("/delete-account", userController.user_delete_post);

/* ****************** */
/* MESSAGE CONTROLLER */

/* POST new message */
router.post("/message", messageController.message_new_post);

/* POST ADMIN delete message */
router.post(
	"/delete-message-admin",
	messageController.message_deleteAdmin_post
);

/* POST delete message */
router.post("/delete-message", messageController.message_delete_post);

module.exports = router;
