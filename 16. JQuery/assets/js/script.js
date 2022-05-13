// document.addEventListener("DOMContentLoaded", function () {
//   let paragraphs = document.querySelectorAll("p");
//   if (paragraphs) {
//     paragraphs.forEach((p) => {
//       p.addEventListener("click", function () {
//         this.remove();
//       });
//     });
//   }
// });

$(document).ready(function () {
  //   $("p").click(function () {
  //     $(this).hide();
  //   });
  //   $(".box .title p").click(function () {
  //     $(this).remove();
  //   });

  $(".btnHide").click(function () {
    $("p").hide();
  });
  $(".btnShow").click(function () {
    $("p").show();
  });

  $(".fadeIn").click(() => {
    $("p").fadeIn(2000);
  });
  $(".fadeOut").click(() => {
    $("p").fadeOut(2000);
  });
  $(".fadeToggle").click(() => {
    $("p").fadeToggle("slow");
  });
  $(".fadeTo").click(() => {
    $("p").fadeTo("slow", "0");
  });

  $(".slideUp").click(function () {
    $(".box").slideUp(6000);
  });

  $(".slideDown").click(function () {
    $(".box").slideDown(4000);
  });

  $(".slideToggle").click(function () {
    $(".box").slideToggle();
  });

  $(".animate").click(function () {
    // $("#box").animate(
    //   {
    //     // left: "250px",
    //     // top: "200px",
    //     backgroundColor: "rgb( 20, 20, 20 )",
    //   },
    //   200
    // );
    $(".box").stop();
    // $(".box").css({ backgroundColor: "red" });
  });

  //   $("#toggle").click(function () {
  //     $("#elem").animate({
  //       color: "green",
  //       backgroundColor: "rgb( 20, 20, 20 )",
  //     });
  //   });

  let a = $(".link");
  let box = $(".box");
  //   a.removeAttr("class");
  //   console.log($(".link").attr("href", "https://www.shazam.com"));

  //   setTimeout(() => {
  //     console.log($(".inp").val());
  //   }, 3000);

  //   let style = {
  //     color: "red",
  //     textDecoration: "none",
  //     backgroundColor: "black",
  //     obj: {
  //       color: "aqua",
  //     },
  //   };

  //   a.css(style);

  //   console.log(a.hasClass("linka"));

  //   console.log(a.text());

  $(".scroll").click(function () {
    alert($(".article").scrollTop());
  });

  console.log(box.position().bottom);
});
