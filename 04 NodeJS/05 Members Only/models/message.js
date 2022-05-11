const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const MessageSchema = new Schema({
	title: { type: String, required: true, minlength: 1, maxLength: 20 },
	text: { type: String, required: true, minlength: 1, maxLength: 500 },
	timestamp: { type: Date, default: Date.now },
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// Url
MessageSchema.virtual("url").get(function () {
	return "/message/" + this._id;
});

// Date DD/MM/YYYY and hour
MessageSchema.virtual("readableDate").get(function () {
	return (
		DateTime.fromJSDate(this.timestamp).setLocale("tr").toLocaleString() +
		" / " +
		DateTime.fromJSDate(this.timestamp)
			.setLocale("tr")
			.toLocaleString(DateTime.TIME_SIMPLE)
	);
});

module.exports = mongoose.model("Message", MessageSchema);
