window.onload = () => {
  const firstImage = document.querySelector(".first-image");
  const images = document.querySelectorAll(".image");

  for (const image of images) {
    image.addEventListener("mouseover", (event) => {
      zoomIn(image);
    });
    image.addEventListener("mouseout", (event) => {
      zoomOut(image);
    });
    image.addEventListener("click", (event) => {
      changeImage(image);
      if (allImagesAreSame()) {
        setTimeout(alertWin, 500);
      }
    });
  }

  function zoomIn(image) {
    image.style.transform = "scale(1.05)";
    image.style.transition = "transform 0.5s";
  }

  function zoomOut(image) {
    image.style.transform = "scale(1)";
    image.style.transition = "transform 0.5s";
  }

  function changeImage(image) {
    randomNumber = Math.floor(Math.random() * 10);
    image.src = "https://picsum.photos/200?random=" + randomNumber;
  }

  function allImagesAreSame() {
    for (const image of images) {
      if (image.src !== firstImage.src) {
        return false;
      }
    }
    return true;
  }

  function alertWin() {
    alert("You win!");
  }
};
