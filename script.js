const myImg = [
  "berlin.jpg",
  "Finland.jpg",
  "Holland.jpg",
  "London.jpg",
  "NewYork.jpg",
  "stockholm.jpg",
];

function init() {

generateTemplate();

}

function generateTemplate() {
  let content = document.getElementById("img-container")

  for (let index = 0; index < myImg.length; index++) {
    
    content.innerHTML += `<button>
                          <img src="./IMG_folder/Photos/${myImg[index]}" alt="${myImg[index]}">
                        </button>`;
  }
}
