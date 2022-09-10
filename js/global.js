function scroll() {
  let button = document.getElementById("back_to_top");

  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    button.style.opacity = "1";
  } else {
    button.style.opacity = "0";
  }
}

function onclickNavbarButton() {
  let button = document.getElementById("navbar_button_mobile");
  let buttonClose = document.getElementById("navbar_button_close_mobile");
  let navbar = document.getElementById("navbar_mobile");

  button.style.display = "none";
  buttonClose.style.display = "flex";
  navbar.style.display = "block";
}

function onclickNavbarButtonClose() {
  let button = document.getElementById("navbar_button_mobile");
  let buttonClose = document.getElementById("navbar_button_close_mobile");
  let navbar = document.getElementById("navbar_mobile");

  button.style.display = "flex";
  buttonClose.style.display = "none";
  navbar.style.display = "none";
}

// read scroll to set back to top button
window.onscroll = function () {
  scroll();
};

// set year to footer
let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
