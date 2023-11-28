let global = this;

global.addEventListener("DOMContentLoaded", function () {

  global.onload = function () {
    var invisible = document.querySelector(".preloader-wrapper");

    invisible.style.display = "none";

    var positionChange = document.querySelector(".navbar");

    positionChange.style.position = "relative";
  };

  var activatorButton = this.document.getElementById("contact-injector");

  var injectionPoint = this.document.getElementById("contact");

  activatorButton.addEventListener("click", function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "Data/Contact.html");

    xhr.send();

    xhr.onload = function () {

      let responseData = xhr.responseText;

      injectionPoint.innerHTML = responseData;

    };

  });

});
