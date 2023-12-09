const User = require("../models/user");
const Message = require("../models/message");

const async = require("async");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const passport = require("passport");

require("dotenv").config();

// Check authentication
const checkIfNotAuth = (req, res) => {
	if (req.isAuthenticated()) {
		res.redirect("/");
		return;
	}
};

const checkIfAuth = (req, res) => {
	if (!req.isAuthenticated()) {
		res.redirect("/");
		return;
	}
};

// GET login
exports.user_login_get = function (req, res) {
	// Check authentication
	checkIfNotAuth(req, res);

	res.render("login", {});
};

// POST login
exports.user_login_post = [
	body("email")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("email must be specified ")
		.isEmail()
		.withMessage("email must be valid email"),
	body("password")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("password must be specified")
		.isLength({ min: 6 })
		.withMessage("password must be over 6 char"),

	(req, res, next) => {
		// Check authentication
		checkIfNotAuth(req, res);

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.render("login", { errors: errors.array() });
			return;
		} else {
			return next();
		}
	},
];

// Auth
exports.user_login_auth_post = passport.authenticate("local", {
	successRedirect: "/",
	failureRedirect: "/login",
});

// GET register
exports.user_register_get = function (req, res) {
	// Check authentication
	checkIfNotAuth(req, res);

	res.render("signup", {});
};

// POST register
exports.user_register_post = [
	body("username")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("username must be specified")
		.isLength({ min: 3 })
		.withMessage("username at least must be 3 character")
		.custom(async (username) => {
			const isUsername = await User.findOne({ username: username });

			if (isUsername) {
				throw new Error("username in use");
			}
		}),
	body("email")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("email must be specified ")
		.isEmail()
		.withMessage("email must be valid email")
		.custom(async (email) => {
			const isEmail = await User.findOne({ email: email });

			if (isEmail) {
				throw new Error("Email in use");
			}
		}),
	body("password")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("password must be specified")
		.isLength({ min: 6 })
		.withMessage("password must be over 6 char")
		.custom((password, { req }) => {
			if (password !== req.body.rpassword) {
				return false;
			} else {
				return true;
			}
		})
		.withMessage("Passwords must match"),

	body("avatar", "Something gone wrong").escape(),

	(req, res, next) => {
		// Check authentication
		checkIfNotAuth(req, res);

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.render("signup", { errors: errors.array() });
			return;
		} else {
			bcrypt.hash(req.body.password, 5, function (err, hash) {
				if (err) {
					return next(err);
				}

				// create user with hashed password
				const newUser = new User({
					username: req.body.username,
					email: req.body.email,
					password: hash,
					avatar: req.body.avatar || 1,
				});

				newUser.save(function (err) {
					if (err) {
						return next(err);
					}

					// User registered, send login page
					res.render("login", { registered: true });
				});
			});
		}
	},
];

// POST user logout
exports.user_logout_post = function (req, res) {
	// Check authentication
	checkIfAuth(req, res);

	req.logout();
	res.redirect("/");
};

// GET profile
exports.user_profile_get = function (req, res, next) {
	// Check authentication
	checkIfAuth(req, res);

	// Find if user has messages
	Message.find({ user: req.user._id })
		.populate("user")
		.exec(function (err, results) {
			if (err) {
				return next(err);
			}

			res.render("profile", { messages: results.reverse() });
		});
};

// GET membership code
exports.user_code_post = [
	body("code", "Code is must").trim().isLength({ min: 1 }).escape(),

	(req, res, next) => {
		// Check authentication
		checkIfAuth(req, res);

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.render("profile", { errors: errors.array() });
			return;
		} else {
			// If code is false
			if (
				req.body.code !== process.env.IS_ADMIN &&
				req.body.code !== process.env.IS_MEMBER
			) {
				res.render("profile", { errors: [{ msg: "Code is wrong!" }] });
				return;
			}

			let newUserUpdate;

			// Only membership code
			if (req.body.code === process.env.IS_MEMBER) {
				newUserUpdate = new User({
					_id: req.user._id,
					isMember: true,
					avatar: req.user.avatar,
				});
			}

			// Membership and admin code
			if (req.body.code === process.env.IS_ADMIN) {
				newUserUpdate = new User({
					_id: req.user._id,
					isMember: true,
					isAdmin: true,
					avatar: req.user.avatar,
				});
			}

			// Code is true
			User.findByIdAndUpdate(req.user._id, newUserUpdate, {}, (err) => {
				if (err) {
					return next(err);
				}

				// Membership updated
				res.redirect("/profile");
			});
		}
	},
];

// GET other users profile
exports.user_otherProfile_get = function (req, res, next) {
	// Check authentication
	checkIfAuth(req, res);

	async.parallel(
		{
			user: function (cb) {
				User.findOne({ username: req.params.username }).exec(cb);
			},
			allMessages: function (cb) {
				Message.find().populate("user").exec(cb);
			},
		},
		function (err, results) {
			if (err) {
				return next(err);
			}

			const messages = [];

			results.allMessages.map((message) => {
				if (message.user._id.toString() == results.user._id.toString()) {
					messages.push(message);
				}
			});

			res.render("user_profile", {
				messages: messages.reverse(),
				user: results.user,
			});
		}
	);
};

// POST delete account
exports.user_delete_post = function (req, res, next) {
	// Check authentication
	checkIfAuth(req, res);

	async.series(
		[
			function (cb) {
				Message.deleteMany({ user: req.user._id }).exec(function () {
					cb(null);
				});
			},
			function (cb) {
				User.findByIdAndRemove(req.user._id).exec(cb);
			},
		],
		function (err) {
			if (err) {
				return next(err);
			}

			// Logout from account
			req.logout();
			res.redirect("/");
		}
	);
};
