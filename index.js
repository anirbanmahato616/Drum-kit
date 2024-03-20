/*document.querySelector(".w").addEventListener("click",function (){
    alert("I got clicked");
});

document.querySelector(".a").addEventListener("click",function (){
    alert("I got clicked");
});

document.querySelector(".s").addEventListener("click",function (){
    alert("I got clicked");
});

document.querySelector(".d").addEventListener("click",function (){
    alert("I got clicked");
});

document.querySelector(".j").addEventListener("click",function (){
    alert("I got clicked");
});

document.querySelector(".k").addEventListener("click",function (){
    alert("I got clicked");
});

document.querySelector(".l").addEventListener("click",function (){
    alert("I got clicked");
});*/

/*document.querySelector(".w").addEventListener("click",handleClick);
document.querySelector(".a").addEventListener("click",handleClick);
document.querySelector(".s").addEventListener("click",handleClick);
document.querySelector(".d").addEventListener("click",handleClick);
document.querySelector(".j").addEventListener("click",handleClick);
document.querySelector(".k").addEventListener("click",handleClick);
document.querySelector(".l").addEventListener("click",handleClick);

function handleClick(){
    alert("I got clicked.");
}*/

//Detecting button press
var numberOfDrumButton = document.querySelectorAll(".drum").length;
var i;
for(i=0;i<numberOfDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    });
}

//Detecting keyboard press
document.addEventListener("keydown",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
             var audio = new Audio("./sounds/tom-1.mp3");
             audio.play();
             break;
        case 'j':
             var audio = new Audio("./sounds/tom-2.mp3");
             audio.play();
             break;
        case 'k':
             var audio = new Audio("./sounds/tom-3.mp3");
             audio.play();
             break;
        case 'l':
             var audio = new Audio("./sounds/tom-4.mp3");
             audio.play();
             break;
        default: console.log(button);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}