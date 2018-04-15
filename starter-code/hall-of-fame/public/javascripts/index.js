$(() => {
    
  $("li.effect").hover(() => {
    $("li.effect").toggleClass("animated infinite pulse");
  });

  setInterval(() => {
    $(".dev-name").toggleClass("animated jello");
  }, 2000);
});
