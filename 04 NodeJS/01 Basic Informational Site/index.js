const http = require("http");
const fs = require("fs");

http
	.createServer((req, res) => {
		if (req.url === "/" || req.url === "/index.html") {
			fs.readFile("index.html", function (err, data) {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(data);
				return res.end;
			});
		} else if (req.url === "/about.html") {
			fs.readFile("about.html", function (err, data) {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(data);
				return res.end;
			});
		} else if (req.url === "/contact-me.html") {
			fs.readFile("contact-me.html", function (err, data) {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(data);
				return res.end;
			});
		} else {
			fs.readFile("404.html", function (err, data) {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(data);
				return res.end;
			});
		}
	})
	.listen(8080, () => {
		console.log("Listeninig on port  8080.....");
	});
