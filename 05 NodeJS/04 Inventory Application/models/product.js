var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	category: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }],
});

// Virtual for product's URL
ProductSchema.virtual("url").get(function () {
	return "/product/" + this._id;
});

//Export model
module.exports = mongoose.model("Product", ProductSchema);
