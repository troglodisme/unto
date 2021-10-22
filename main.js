


if (window.innerWidth > 600) {
  window.onscroll = function() {
  scrollAction();
  scrollActionMenu();
  console.log('desktop');
  }
} else if (window.innerWidth < 599){
  window.onscroll = function() {
  scrollActionMobile();
  console.log('mobile');
  }
}



function scrollAction() {
  var logo = document.getElementById("logo");

  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    logo.style.width = '11%';

  } else {
    logo.style.width = '100%';

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

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    menu.style.opacity = 1;

  } else {
    menu.style.opacity = 0;
  }
}

function scrollActionMobile() {
  var logo = document.getElementById("menu");

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    menu.style.opacity = 1;

  } else {
    menu.style.opacity = 0;

  }
}


function popCart() {
    event.stopPropagation(); ui.openCart();
}
