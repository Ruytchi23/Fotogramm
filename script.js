const myImg = [
  "berlin.jpg",
  "Finland.jpg",
  "Holland.jpg",
  "London.jpg",
  "NewYork.jpg",
  "stockholm.jpg",
  "kilchurn-castle-schottland.jpg",
  "boston-harbor-boston-ma-usa.jpg",
];

function generateTemplate() {
  let content = document.getElementById("img-container");
  content.innerHTML = "";
  for (let index = 0; index < myImg.length; index++) {
    content.innerHTML += `<button aria-haspopup="dialog" aria-controls="myDialog" onclick="openDialog(${index})">
                          <img class="img_size" src="./IMG_folder/Photos/${myImg[index]}" alt="${myImg[index]}">
                        </button>`;
  }
}

let dialogRef = document.getElementById("myDialog");
let dialogImg = document.getElementById("dialogImg");
let side_Numbers = document.getElementById("page_Numbers");

function openDialog(index) {
  dialogImg.src = `./IMG_folder/Photos/${myImg[index]}`;
  side_Numbers.innerHTML = `${index + 1}/8`;
  dialogRef.showModal();
}

function closeDialog() {
  dialogRef.close();
}

let leftButton = document.getElementById("leftButton");
leftButton.onclick = previous;
function previous() {
  let actualIMG = dialogImg.src;
  for (let index = 0; index < myImg.length; index++) {
    if (actualIMG.includes(myImg[index])) {
      if (index == 0) {
        dialogImg.src = `./IMG_folder/Photos/${myImg[myImg.length - 1]}`;
        side_Numbers.innerHTML = `${myImg.length}/8`;
      } else {
        dialogImg.src = `./IMG_folder/Photos/${myImg[index - 1]}`;
        side_Numbers.innerHTML = `${index}/8`;
      }
    }
  }
}

let rightButton = document.getElementById("rightButton");
rightButton.onclick = next;
function next() {
  let actualIMG = dialogImg.src;
  for (let index = 0; index < myImg.length; index++) {
    if (actualIMG.includes(myImg[index])) {
      if (index == myImg.length - 1) {
        dialogImg.src = `./IMG_folder/Photos/${myImg[0]}`;
        side_Numbers.innerHTML = `1/8`;
      } else {
        dialogImg.src = `./IMG_folder/Photos/${myImg[index + 1]}`;
        side_Numbers.innerHTML = `${index + 2}/8`;
      }
    }
  }
}

function logdownprevention(event) {
  console.log("stop?");
  event.stopPropagation();
}

myDialog.addEventListener("click", (event) => {
  if (event.target === myDialog) {
    closeDialog();
    console.log("Listener");
  }
});
