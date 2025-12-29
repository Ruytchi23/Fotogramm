const myImg = [
  "berlin.jpg",
  "Finland.jpg",
  "Holland.jpg",
  "London.jpg",
  "NewYork.jpg",
  "stockholm.jpg",
  "kilchurn-castle-schottland.jpg",
  "Boston-Harbor-Boston-MA-USA.jpg",
];

function init() {

generateTemplate();

}

function generateTemplate() {
  let content = document.getElementById("img-container")
content.innerHTML = "";
  for (let index = 0; index < myImg.length; index++) {
    
    content.innerHTML += `<button onclick="openDialog(${index})">
                          <img class="img_size" src="./IMG_folder/Photos/${myImg[index]}",  alt="${myImg[index]}">
                        </button>`;
  }
}

let dialogRef = document.getElementById("myDialog");
let dialogImg = document.getElementById("dialogImg");

function openDialog(index) {
  dialogImg.src = `./IMG_folder/Photos/${myImg[index]}`;
  dialogRef.showModal();
}

function closeDialog() {
  dialogRef.close();
}
