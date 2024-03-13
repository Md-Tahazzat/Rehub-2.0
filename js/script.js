// global variables
let intersectedTime;

$(document).ready(function () {
  // why not const or let instead of var?
  const footerNav = $("#footer-nav");
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intersectedTime = parseInt(entry.time);
        if (footerNav.hasClass("fixed-footer-nav")) {
          footerNav.removeClass("fixed-footer-nav");
        }
      } else {
        if (
          intersectedTime !== parseInt(entry.time) &&
          !footerNav.hasClass("fixed-footer-nav")
        ) {
          footerNav.addClass("fixed-footer-nav");
          footerNav.css({ opacity: 1 });
        }
      }
    });
  }
  /* create observer to observe those elements which will 
 disable fix position of footer navbar 
*/
  const footerElObserver = new IntersectionObserver(handleIntersection);

  // target elements to observe
  const targetElements = document.querySelectorAll(".fix-nav-remover");

  targetElements.forEach((el) => {
    footerElObserver.observe(el);
  });

  //   add dropdown to QNA section of home page

  class Accordion {
    constructor() {
      this.titles = $(".common-QNA-box .QNA-title");
      this.descriptions = $(".common-QNA-box .common-QNA-des");
      this.titles.on("click", this.handleTitleClick.bind(this));
      this.icons = $(".common-QNA-box .fa-angle-down");
    }

    handleTitleClick(e) {
      const clickedTitle = $(e.currentTarget);
      const clickedIcon = clickedTitle.find(".fa-angle-down");
      const description = clickedTitle.siblings(".common-QNA-des");
      if (!description.hasClass("active")) {
        this.hideAllDescription();
        description.addClass("active").slideDown(200);
        clickedIcon.css("transform", "rotate(180deg)");
      }
    }

    hideAllDescription() {
      this.descriptions.removeClass("active").slideUp(200);
      this.icons.css("transform", "rotate(0deg)");
    }
  }
  new Accordion();
});
