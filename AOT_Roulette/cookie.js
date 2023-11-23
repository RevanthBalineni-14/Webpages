var num = 0;
var cookie = document.getElementById("cookie")

var imageNames = [
    "Annie.jpg",
    "Armin.jpg",
    "Armin_Commander.jpg",
    "Armored_Titan.jpg",
    "Attack_Titan.jpg",
    "Beast_Titan.jpg",
    "Bertolt.jpg",
    "Collosal_Titan.jpg",
    "Connie.jpg",
    "Eren.jpg",
    "Eren_Tatakae.jpg",
    "Erwin.jpg",
    "Female Titan.jpg",
    "Hange.jpg",
    "Historia.jpg",
    "Jaw_Titan.jpg",
    "Jean.jpg",
    "Levi.jpg",
    "Levi_OCD.jpg",
    "Mikasa.jpg",
    "Reiner.jpg",
    "Sasha.jpg"
];


function cookieClick() { 

    // every click increment count by 1 and update the numbers div element
    var numbers = document.getElementById("numbers")//get numbers using ID
    //increment number by 1 for that click
    num+=1
    numbers.innerHTML=num
    var randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)]

    var cookieimg = document.getElementById("cookieimg")
    // get the level div element from the html file
    var level = document.getElementById("upgradeLevel")
    level.innerHTML= randomImageName.split(".")[0]
    cookieimg.src = "imgs/Characters/" + randomImageName
}
