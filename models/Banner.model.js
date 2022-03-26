const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
  name: {
    type: String,
    default: "Баннер"
  },
  typePaper: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  delivery: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner;