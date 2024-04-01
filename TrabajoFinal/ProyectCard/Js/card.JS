const whiteColor = document.querySelector('.White');
const BlueColor = document.querySelector('.Blue');
const GreenColor = document.querySelector('.Green');
const BlackColor = document.querySelector('.Black');

const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

const imageCard = document.querySelector(".img-container");
const feedbackBtn = document.querySelector(".feedback");

const buttonText = document.querySelector(".button-text");

// Evento botones de colores

whiteColor.addEventListener("click" , function(){
    cartButton.style.backgroundColor="black";
    cartButton.style.color="white";
    itemTag.style.backgroundColor="black";
    itemTag.style.color="white";
    imageCard.style.backgroundImage='url(../Img/SeriesS.jpg'
}); 

BlueColor.addEventListener("click" , function(){
    cartButton.style.backgroundColor="blue";
    cartButton.style.color="white";
    itemTag.style.backgroundColor="blue";
    itemTag.style.color="white";
    imageCard.style.backgroundImage='url(../Img/Blue.jpg'
}); 

GreenColor.addEventListener("click" , function(){
    cartButton.style.backgroundColor="green";
    cartButton.style.color="white";
    itemTag.style.backgroundColor="green";
    itemTag.style.color="white";
    imageCard.style.backgroundImage='url(../Img/Green.jpg'
}); 

BlackColor.addEventListener("click" , function(){
    cartButton.style.backgroundColor="black";
    cartButton.style.color="white";
    itemTag.style.backgroundColor="black";
    itemTag.style.color="white";
    imageCard.style.backgroundImage='url(../Img/SeriesX.jpg'
}); 

const cart  = () => {

    cartButton.style.display = "none";
    feedbackBtn.style.display= "block";
};

cartButton.addEventListener("click", cart);

const feedbackFun = () => {

cartButton.style.display= "block";
feedbackBtn.style.display= "none";

};

feedbackBtn.addEventListener("click", feedbackFun);