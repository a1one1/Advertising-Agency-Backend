const Review = require('../models/Review.model');

module.exports.reviewsController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addReview: async (req, res) => {
    try {
      const { text, yes, no } = req.body;
      const review = await Review.create({
        text,
        user: req.user.id,
        recommendation: {
          yes,
          no,
        },
      });
      res.json(review);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  deleteReview: async (req, res) => {
    try {
      const review = Review.findOne({ user: req.user.id });
      if (review.user.toString() === req.user.id) {
        await review.remove();
      }
      res.json(review);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
