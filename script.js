const buttonOne = document.querySelector(".modalbut button ");
const modalOne = document.querySelector("dialog");
const buttonTwo = document.querySelector("dialog button");

buttonOne.onclick = function () {
  modalOne.showModal();
};

buttonTwo.onclick = function () {
  modalOne.close();
};
