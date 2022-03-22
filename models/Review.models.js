const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
