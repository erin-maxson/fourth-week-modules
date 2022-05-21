var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    var num = element.getAttribute("data-number");
    if (state === "hidden") {
      element.textContent = num;
      element.setAttribute("data-state", "visible");
    }

    else {
      element.textContent="";
      element.setAttribute("data-state", "hidden");
    }

  }
}
);

