function openImage(element) {
  const popupContainer = document.querySelector(".popup-container");
  const popupImage = document.getElementById("popupimage"); 
  const animation = document.getElementById("animation");
  const imageGallery = document.querySelector(".image-gallery");

  popupImage.src = element.src;

  popupContainer.style.display = "flex";
  document.body.classList.add("no-scroll");
  imageGallery.classList.add("top"); // Move the gallery to the top

  // Trigger the scale animation
  setTimeout(() => {
    animation.style.transform = "scale(1)";
  }, 0);
}

function closePopup() {
  const popupContainer = document.querySelector(".popup-container");
  const animation = document.getElementById("animation");
  const imageGallery = document.querySelector(".image-gallery");

  animation.style.transform = "scale(0)";

  setTimeout(() => {
    popupContainer.style.display = "none";
    document.body.classList.remove("no-scroll");
    imageGallery.classList.remove("top"); // Move the gallery back to its original position
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
