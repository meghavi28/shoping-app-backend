var mongoose = require("mongoose");
var productSchema = require("../schema/ProductSchema");

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
