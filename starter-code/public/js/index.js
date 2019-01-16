$(".btn-movies").hover(function () {
  $('.part-one-back').css("-webkit-filter", "none");
}, function () {
  $('.part-one-back').css("-webkit-filter", "grayscale(100%)");
});

$(".btn-celebrities").hover(function () {
  $('.part-two-back').css("-webkit-filter", "none");
}, function () {
  $('.part-two-back').css("-webkit-filter", "grayscale(100%)");
});


$("#textarea")
  .focus(function () {
    if (this.value === this.defaultValue) {
      this.value = '';
    }
  })
  .blur(function () {
    if (this.value === '') {
      this.value = this.defaultValue;
    }
  });