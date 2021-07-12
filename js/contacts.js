/**
 * Selectors
 */
const link = document.querySelector(".login-link");
const popup = document.querySelector("#modal-login");
const closeButton = document.querySelector("#modal-close");

/**
 * Event handler`s
 */
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-hidden")
  popup.classList.add("modal-show");
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.add("modal-hidden");
  }
});
