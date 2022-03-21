const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({

category: {
    sport: { type: Boolean, required: true, default: false },
    business: { type: Boolean, required: true, default: false },
    general: { type: Boolean, required: true, default: true },
    entertainment: { type: Boolean, required: true, default: false },
    },
});
const User = mongoose.model("Category", categorySchema);
module.exports = Category;
