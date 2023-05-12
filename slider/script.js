const leftHandle = document.querySelector(".left-handle");
const rightHandle = document.querySelector(".right-handle");

const slider = document.querySelector(".slider");
const sliderChildCount = slider.children.length;

const images = document.querySelectorAll("img");

const about = document.querySelector(".about");

let mouseOver;

const getCurrentIndex = () => {
  const index = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  return index;
};

leftHandle.addEventListener("click", () => {
  let currentIndex = getCurrentIndex();
  if (currentIndex == 0) currentIndex = sliderChildCount;
  slider.style.setProperty("--slider-index", currentIndex - 1);
});

rightHandle.addEventListener("click", moveRight);

function moveRight() {
  let currentIndex = getCurrentIndex();
  if (currentIndex == sliderChildCount - 1) currentIndex = -1;
  slider.style.setProperty("--slider-index", currentIndex + 1);
}

for (const image of images) {
  image.addEventListener("mouseover", () => {
    mouseOver = true;
    leftHandle.style.display = "none";
    rightHandle.style.display = "none";
    about.style.display = "block";
  });
  image.addEventListener("mouseleave", () => {
    mouseOver = false;
    leftHandle.style.display = "block";
    rightHandle.style.display = "block";
    about.style.display = "none";
  });
}

const slideInterval = window.setInterval(() => {
  if (!mouseOver) {
    moveRight();
  }
}, 5000);
