let Global = this;

Global.addEventListener("DOMContentLoaded", function () {

  Global.onload = function () {
    var invisible = document.querySelector(".preloader-wrapper");

    invisible.style.display = "none";

    var PositionChange = document.querySelector(".navbar");

    PositionChange.style.position = "relative";
  };
  
});
