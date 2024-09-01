function openImage(element) {
  const popupContainer = document.querySelector(".popup-container");
  const popupImage = document.getElementById("popupimage");
  const animation = document.getElementById("animation");

  popupImage.src = element.src;

  popupContainer.style.display = "flex";

  // Trigger the scale animation
  setTimeout(() => {
    animation.style.transform = "scale(1)";
  }, 0);
}

function closePopup() {
  const popupContainer = document.querySelector(".popup-container");
  const animation = document.getElementById("animation");

  animation.style.transform = "scale(0)";

  setTimeout(() => {
    popupContainer.style.display = "none";
  }, 300);
}

const images = document.querySelectorAll(".image-box img");
images.forEach((image) => {
  image.addEventListener("click", function () {
    openImage(this);
  });
});

const closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", closePopup);

const popupContainer = document.querySelector(".popup-container");
popupContainer.addEventListener("click", function (event) {
  if (event.target === popupContainer) {
    closePopup();
  }
});
