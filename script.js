const myImg = [
  "./IMG_folder/Photos/berlin.jpg",
  "./IMG_folder/Photos/Finland.jpg",
  "./IMG_folder/Photos/Holland.jpg",
  "./IMG_folder/Photos/London.jpg",
  "./IMG_folder/Photos/NewYork.jpg",
  "./IMG_folder/Photos/stockholm.jpg",
];
const imgContainer = document.querySelector(".img-container");
myImg.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = src.split("/").pop();
  img.loading = "lazy";
  imgContainer.appendChild(img);
});



let container = document.getElementById("container");
const modalImage = document.getElementById("modal-image");
const modal = document.getElementById("modal");

const images = container.querySelectorAll("img");

for (let i = 0; i < image.length; i++) {
  images[i].addEventListener("click", function () {
    modalImage.src = images[i].src;
    modalImage.classList.remove("no-display");
  });
}
