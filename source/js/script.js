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

function headerCountryFilter() {
  var activateBlock = document.querySelector(".page-main__item--choose-country");
  var button = activateBlock.querySelector(".choose-country__btn--toggle");
  var closeBtn = activateBlock.querySelector(".alphabet__btn");
  button.addEventListener("click", function () {
    activateBlock.classList.toggle("choose-country--active");
  });
  closeBtn.addEventListener("click", function () {
    activateBlock.classList.remove("choose-country--active");
  });
}

legendToggle();
headerCountryFilter();
