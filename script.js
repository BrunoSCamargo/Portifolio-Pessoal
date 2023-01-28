const controls = document.querySelectorAll(".control");
const controls1 = document.querySelectorAll(".control1");
let currentItem = 0;
let currentIte = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
const items1 = document.querySelectorAll(".item1");
const maxItem = items1.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    items[currentItem].classList.add("current-item");

    items[currentItem].scrollintoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest",
    });
  });
});

controls1.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentIte -= 1;
    } else {
      currentIte += 1;
    }

    if (currentIte >= maxItem) {
      currentIte = 0;
    }

    if (currentIte < 0) {
      currentIte = maxItem - 1;
    }

    items1.forEach((item) => item.classList.remove("current-item"));

    items1[currentIte].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    items1[currentIte].classList.add("current-item");

    items1[currentIte].scrollintoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest",
    });
  });
});
