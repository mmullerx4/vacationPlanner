//javascript for swapping out image on each page
const currentPage = window.location.pathname;

switch (currentPage) {
  case "/page1.html":
    imagePath = "path/image1.jpg"
    break;
  case "/page2.html":
    imagePath = "path/image2.jpg"
    break;
  default:
    imagePath = "path/default.jpg";
}

//set the image source diynamically 
document.querySelector(".logo img").src = imagePath;

