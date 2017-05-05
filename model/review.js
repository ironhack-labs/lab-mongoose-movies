const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  reviewBody: {
    type: String,
    required: [true, 'Please do yourself a favor, and right a review...or not.'],
    minlength: 10,
    maxlength: 500 //with this you could tell the backend not to post this content/review if it is not within this range
  },
  stars: {
    type: Number,
    // default: 0, no longer need default if I have a min/max
    required: [true, 'Rate the product'],
    min: [1, 'Why write a review if you arent going to put anything'],
    max: [11, 'I know you are excited but the highest we could turn it up is up to 11 and that is cheating']
  },
  author: {
    type: String,
    required: [true, 'All reviewers are to have a name']
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
