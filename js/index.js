$(".fa-arrow-up").click(function () {
  $("html").animate({ scrollTop: 0 }, 1000);
});


// change nav bar color when scrolling
let secOneHeight = $("#Portfolio").offset().top;
$(window).scroll(function () {
  let scrollTopHeight = $(window).scrollTop();
  if (scrollTopHeight > secOneHeight - $("#navbar-example").outerHeight) {
    $("#navbar-example").removeClass("bg-black");
    $("#navbar-example").addClass("bg-light");
    $(".fa-arrow-up").fadeIn(500);
  } else {
    $("#navbar-example").addClass("bg-black");
    $("#navbar-example").removeClass("bg-light");
    $(".fa-arrow-up").fadeOut(500);
  }
});

// show loading screen
$(window).ready(function () {
  $(".loading").fadeOut(2000, function () {
    $("body").css("overflow", "visible");
    $(".loading").remove()
  });
});

// add class active to target element in nav bar
let navItems = $("#navbar-example .nav-link");
navItems.click(function (e) {
  navItems.removeClass("active");
  $(e.target).addClass("active");
 
  
});

// go ti target section
$(".nav-link[href^='#']").click(function (e) {
  let myHref = $(e.target).attr("href");
  let myHrefOffset = $(myHref).offset().top
  $("html").animate({scrollTop:myHrefOffset}, 1200)
})



// add class active element in nav bar when arrived to his section
$(window).scroll(function () {
  if ($(window).scrollTop()) {
    if ($(window).scrollTop() >= $("#Portfolio").offset().top) {
      $(".nav-link[href^='#']").removeClass("active");
      $(".nav-link[href='#Portfolio']").addClass("active");
    } else {
      $(".nav-link[href='#Portfolio']").removeClass("active");
    }

    if ($(window).scrollTop() >= $("#Services").offset().top -100) {
      $(".nav-link[href^='#']").removeClass("active");
      $(".nav-link[href='#Services']").addClass("active");
    } else {
      $(".nav-link[href='#Services']").removeClass("active");
    }
    if ($(window).scrollTop() >= $(".test").offset().top -100) {
      $(".nav-link[href^='#']").removeClass("active");
      $(".nav-link[href='#Testimonial']").addClass("active");
    } else {
      $(".nav-link[href='#Testimonial']").removeClass("active");
    }
  } else {
    $(".nav-link[href='#Home']").addClass("active");
  }
});

// change spans bg color 
$(".sideInner .innerBox").eq(0).css("background-color", "#09c");
$(".sideInner .innerBox").eq(1).css("background-color", "#f00");
$(".sideInner .innerBox").eq(2).css("background-color", "#0f0");
$(".sideInner .innerBox").eq(3).css("background-color", "#00f");

// slide bar 
let sideInnerWidth = $(".sideInner").innerWidth();

$(".sideBar").animate({ left: -sideInnerWidth }, 0);

$(".fa-gear").click(function () {
  let slideBarLeft = $(".sideBar").css("left");
  if (slideBarLeft == "0px") {
    $(".sideBar").animate({ left: -sideInnerWidth }, 1000);
  } else {
    $(".sideBar").animate({ left: 0 }, 1000);
  }
});

$(".sideInner .innerBox").click(function (e) {
  let color = $(e.target).css("background-color");
  $(":root").css("--main-Color", color);
});




