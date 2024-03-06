var mongoose = require("mongoose");
var userSchema = require("../schema/UserSchema");

const User = mongoose.model("User", userSchema);

module.exports = User;
