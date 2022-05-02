const path = require("path");
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about.html", (req, res) => {
	res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact-me.html", (req, res) => {
	res.sendFile(path.join(__dirname, "/contact-me.html"));
});

app.get("/index.html", (req, res) => {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});
