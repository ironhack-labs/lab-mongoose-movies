$(() => {
    $("li.effect").hover(() => {
        $("li.effect").toggleClass("animated infinite pulse");
        console.log("hover");
    });
  })