#! /usr/bin/env node

console.log(
	"This script populates some test products and categories to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);

var async = require("async");
var Product = require("./models/product");
var Category = require("./models/category");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var categories = [];
var products = [];

function categoryCreate(name, cb) {
	var category = new Category({ name: name });

	category.save(function (err) {
		if (err) {
			cb(err, null);
			return;
		}
		console.log("New Category: " + category);
		categories.push(category);
		cb(null, category);
	});
}

function productCreate(name, price, category, cb) {
	var productdetail = {
		name: name,
		price: price,
		category: category,
	};

	var product = new Product(productdetail);
	product.save(function (err) {
		if (err) {
			cb(err, null);
			return;
		}
		console.log("New Product: " + product);
		products.push(product);
		cb(null, product);
	});
}

function createCategories(cb) {
	async.series(
		[
			function (callback) {
				categoryCreate("Cleanser", callback);
			},
			function (callback) {
				categoryCreate("Toner", callback);
			},
			function (callback) {
				categoryCreate("Moisturiser", callback);
			},
			function (callback) {
				categoryCreate("Lotion", callback);
			},
			function (callback) {
				categoryCreate("Sunscreen", callback);
			},
			function (callback) {
				categoryCreate("Makeup", callback);
			},
			function (callback) {
				categoryCreate("Exfoliator", callback);
			},
			function (callback) {
				categoryCreate("Serum", callback);
			},
		],
		// optional callback
		cb
	);
}

function createProducts(cb) {
	async.parallel(
		[
			function (callback) {
				productCreate(
					"Sukin Brightening Jelly Exfoliator",
					5.99,
					[categories[6]],
					callback
				);
			},
			function (callback) {
				productCreate("Clarins Double Serum", 4.49, [categories[7]], callback);
			},
			function (callback) {
				productCreate(
					"CeraVe SA Smoothing Cleanser with Salicylic Acid",
					6.99,
					[categories[0]],
					callback
				);
			},
			function (callback) {
				productCreate(
					"Liz Earle Instant Boost Skin Tonic",
					8.99,
					[categories[1]],
					callback
				);
			},
			function (callback) {
				productCreate(
					"NIVEA SUN Protect & Moisture Suncream",
					5.99,
					[categories[4]],
					callback
				);
			},
			function (callback) {
				productCreate(
					"DIOR Forever Skin Glow Foundation",
					9.99,
					[categories[5]],
					callback
				);
			},
			function (callback) {
				productCreate(
					"E45 Daily Moisturiser Lotion Pump",
					4.39,
					[categories[2], categories[3]],
					callback
				);
			},
		],
		// optional callback
		cb
	);
}

async.series(
	[createCategories, createProducts],
	// Optional callback
	function (err, results) {
		if (err) {
			console.log("FINAL ERR: " + err);
		}

		// All done, disconnect from database
		mongoose.connection.close();
	}
);
