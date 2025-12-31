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

function generateTemplate() {
  let content = document.getElementById("img-container");
  content.innerHTML = "";
  for (let index = 0; index < myImg.length; index++) {
    content.innerHTML += `<button aria-haspopup="dialog" aria-controls="myDialog" onclick="openDialog(${index})">
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

keyPressLeft()
function keyPressLeft() {

document.getElementById("leftButton").innerHTML = `<button onclick="keypress()">⬅️</button>`;

};

function keypress() {
if (leftButton.clicked == true) {
  console.log("hello");
  
}else
console.log("nothing");

} //lass ich für morgen stehen ist alles aber falsch :D
