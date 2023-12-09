const Message = require("../models/message");

const { body, validationResult } = require("express-validator");

require("dotenv").config();

const checkIfAuth = (req, res) => {
	if (!req.isAuthenticated()) {
		res.redirect("/");
		return;
	}
};

// POST message
exports.message_new_post = [
	body("title")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("title must be specified")
		.isLength({ max: 20 })
		.withMessage("title must be under 20 characters"),

	body("text")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("title must be specified")
		.isLength({ max: 500 })
		.withMessage("title must be under 500 characters"),

	(req, res, next) => {
		// Check authentication
		checkIfAuth(req, res);

		const errors = validationResult(req);

		Message.find({ user: req.user._id })
			.populate("user")
			.exec(function (err, messages) {
				if (err) {
					return next(err);
				}

				if (!errors.isEmpty()) {
					// If error send user's messages too
					res.render("profile", {
						errorsPost: errors.array(),
						messages: messages,
					});
					return;
				} else {
					const newMessage = new Message({
						title: req.body.title,
						text: req.body.text,
						user: req.user._id,
					});

					newMessage.save(function (err) {
						if (err) {
							return next(err);
						}

						// Message sent
						res.redirect("/");
					});
				}
			});
	},
];

// POST delete message
exports.message_deleteAdmin_post = [
	body("targetMessage").trim().escape(),

	(req, res, next) => {
		// Check authentication
		checkIfAuth(req, res);

		if (!req.user.isAdmin) {
			// If unauthorized, send 404
			return next();
		}

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return next(errors.array());
		} else {
			Message.findByIdAndRemove(req.body.targetMessage, function (err) {
				if (err) {
					return next(err);
				}

				// Message removed
				res.redirect("/");
			});
		}
	},
];

// POST delete message
exports.message_delete_post = [
	body("targetMessage", "message id").trim().escape(),
	body("targetUser", "user id").trim().escape(),
	(req, res, next) => {
		// Check authentication
		checkIfAuth(req, res);

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return next(errors.array());
		} else {
			if (req.user._id.toString() !== req.body.targetUser) {
				// If unauthorized, send 404
				return next();
			}

			Message.findByIdAndRemove(req.body.targetMessage, function (err) {
				if (err) {
					return next(err);
				}

				// Message removed
				res.redirect("/profile");
			});
		}
	},
];
