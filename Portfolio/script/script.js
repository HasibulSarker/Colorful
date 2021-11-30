let global = this;

global.addEventListener("DOMContentLoaded", function () {

  global.onload = function () {
    var invisible = document.querySelector(".preloader-wrapper");

    invisible.style.display = "none";

    var positionChange = document.querySelector(".navbar");

    positionChange.style.position = "relative";
  };
  
});
