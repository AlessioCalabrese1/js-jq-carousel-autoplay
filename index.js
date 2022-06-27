let images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

let img_container = document.getElementById("img_container");
let thumbnailCotainer = document.getElementById("thumbnailCotainer");
let i = 0;

for (let index = 0; index < images.length; index++) {
    let current_img = document.createElement("img");
    let thumbnailElement = document.createElement("i");
    thumbnailElement.classList.add("fa-solid", "fa-circle", "m-2");

    current_img.setAttribute("src", images[index]);
    if (index == i) {
        current_img.classList.add("active", "w_100");
        thumbnailElement.classList.add("clr_mg")
    }
    current_img.classList.add("w_100");

    img_container.append(current_img);
    thumbnailCotainer.append(thumbnailElement);

    thumbnailElement.addEventListener("click", function(){
        let cancelImg = document.querySelector("img.active");
        cancelImg.classList.remove("active");
        current_img.classList.add("active");
        let thumbnailClrMg = document.querySelector(".clr_mg");
        thumbnailClrMg.classList.remove("clr_mg");
        thumbnailElement.classList.add("clr_mg");
    })
}

let goLeft = document.getElementById("goLeft");
let goRight = document.getElementById("goRight");

let imgElements = document.querySelectorAll("#img_container img");
let thumbnailElements = document.querySelectorAll("#thumbnailCotainer i");
console.log(imgElements);
console.log(thumbnailElements);

goLeft.addEventListener("click", function(){
    let imgActive = document.querySelector("img.active");
    let thumbnailClrMg = document.querySelector(".clr_mg");
    thumbnailClrMg.classList.remove("clr_mg");
    imgActive.classList.remove("active");
    i--;
    console.log(i);
    if(i < 0){
        i = images.length - 1;
        console.log("Questo è i nel menter: " + i);
    }
    imgElements[i].classList.add("active");
    thumbnailElements[i].classList.add("clr_mg");
});

goRight.addEventListener("click", function(){
    let imgActive = document.querySelector("img.active");
    let thumbnailClrMg = document.querySelector(".clr_mg");
    thumbnailClrMg.classList.remove("clr_mg");
    imgActive.classList.remove("active");
    i++;
    console.log(i);
    if(i == images.length){
        i = 0;
    }
    console.log("Questo è i dopo: " + i);
    imgElements[i].classList.add("active");
    thumbnailElements[i].classList.add("clr_mg");
});

setInterval(function(){
    let imgActive = document.querySelector("img.active");
    let thumbnailClrMg = document.querySelector(".clr_mg");
    thumbnailClrMg.classList.remove("clr_mg");
    imgActive.classList.remove("active");
    i++;
    console.log(i);
    if(i == images.length){
        i = 0;
    }
    console.log("Questo è i dopo: " + i);
    imgElements[i].classList.add("active");
    thumbnailElements[i].classList.add("clr_mg");
}, 3000);