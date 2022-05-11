const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");

const indexRouter = require("./routes/index");

const mongoose = require("mongoose");
require("dotenv").config();
const MongoStore = require("connect-mongo");
const session = require("express-session");

const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

const User = require("./models/user");

const app = express();

/* mongoDB */

const mongoDb = process.env.MONGODB_URI;

mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on("error", console.error.bind(console, "mongo connection error"));
// eslint-disable-next-line no-console
mongoose.connection.readyState === 2 ? console.log("MongoDB connected") : "";

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// public folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(compression());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* Session*/

app.use(
	session({
		secret: "foobar",
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({
			mongoUrl: mongoDb,
			collection: "sessions",
		}),
		cookie: { maxAge: 1000 * 60 * 60 },
		sameSite: "strict",
	})
);

app.use(passport.initialize());
app.use(passport.session());

/* Passport */
passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},

		(email, password, done) => {
			User.findOne({ email: email }, (err, user) => {
				if (err) {
					return done(err);
				}

				if (!user) {
					return done(null, false, { message: "Incorrect username" });
				}

				bcrypt.compare(password, user.password, (err, res) => {
					if (res) {
						return done(null, user);
					} else {
						return done(null, false, { message: "Incorrect password" });
					}
				});
			});
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});

app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

/* Routes */
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
