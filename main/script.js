let imgBox = document.querySelector(".img-org");
let imgOrg = document.querySelector(".img-org>img");
let zoomOrg = document.querySelector(".zoom-org");
let imgSmall = document.querySelectorAll(".img-s>img");

imgBox.addEventListener("mousemove", (e) => {
  zoomOrg.style.display = "block";
  const imgSrc = imgOrg.getAttribute("src");
  zoomOrg.style.backgroundImage = `url(${imgSrc})`;

  console.log(e.offsetX);
  console.log(e.offsetY);
  console.log("imgBox.offsetWidth:", imgBox.offsetWidth);
  console.log("imgBox.offsetHeight:", imgBox.offsetHeight);

  let mousePoint = {
    x: (e.offsetX * 100) / imgBox.offsetWidth,
    y: (e.offsetY * 100) / imgBox.offsetHeight,
  };
  zoomOrg.style.backgroundPositionX = `${mousePoint.x}%`;
  zoomOrg.style.backgroundPositionY = `${mousePoint.y}%`;
});

imgBox.addEventListener("mouseleave", () => {
  zoomOrg.style.display = "none";
});

let currentImg;

imgSmall.forEach((img) => {
  img.addEventListener("click", () => {
    imgOrg.src = img.src;
    if (currentImg) {
      currentImg.style.border = "none";
    }
    currentImg = img.parentElement;
    currentImg.style.border = `1px solid green`;
  });
});
