if (window.innerWidth > 600) {
  window.onscroll = function() {
  scrollAction()
  scrollActionMenu()
  }
} else if (window.innerWidth < 599){
  window.onscroll = function() {
  scrollActionMobile()

  document.getElementById("more").classList.add("hide");
  }
}

function scrollAction() {
  var logo = document.getElementById("logo");
  // var logo = document.getElementById("menu");

  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    logo.style.width = '12%';
    // menu.style.opacity = 1;

  } else {
    logo.style.width = '100%';
    // menu.style.opacity = 0;

  }
}


function scrollActionMobile() {
  var logo = document.getElementById("logo")

  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    logo.style.width = '50%';

  } else {
    logo.style.width = '100%';
  }
}


function scrollActionMenu() {
  var logo = document.getElementById("menu");

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    menu.style.opacity = 1;

  } else {
    menu.style.opacity = 0;

  }
}

function popCart() {
    event.stopPropagation(); ui.openCart();
}



// function scrollActionNav() {
//   // var nav_info = document.getElementById("nav_info")
//   // var nav_shop = document.getElementById("nav_shop")
//   var menu = document.getElementById("menu")
//
//   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
//     // nav_info.style.display = "block";
//     // nav_shop.style.display = "block";
//     menu.style.display = "block";
//
//
//   } else {
//     // nav_info.style.display = "none";
//     // nav_shop.style.display = "none";
//     menu.style.display = "none";
//
//   }
// }
