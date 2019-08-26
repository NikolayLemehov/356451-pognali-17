function legendToggle() {
  var fieldsetAll = document.querySelectorAll(".main-filter__set");
  var addToggleHandler = function (toggle, fieldset) {
    toggle.addEventListener("click", function () {
      fieldset.classList.toggle("main-filter__set--active");
    });
  };
  for (var i = 0; i < fieldsetAll.length; i++) {
    var fieldset = fieldsetAll[i];
    var toggle = fieldset.querySelector(".main-filter__toggle");
    addToggleHandler(toggle, fieldset);
  }
}

legendToggle();
