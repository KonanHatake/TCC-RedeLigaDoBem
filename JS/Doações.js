const Container = document.querySelector('#A');
let Clicked = true;

let showEhide = function(){
    if(Clicked){
        Container.style.display ='block';
        Clicked = false;
    }
    else{
        Container.style.display = 'none';
        Clicked = true;
    }
}

const divContainer = document.querySelector('#B');
let isClicked = true;

let showOrHide = function(){
    if(isClicked){
        divContainer.style.display ='block';
        isClicked = false;
    }
    else{
        divContainer.style.display = 'none';
        isClicked = true;
    }
}

const Containery = document.querySelector('#C');
let Clickedy = true;

let showYhide = function(){
    if(Clickedy){
        Containery.style.display ='block';
        Clickedy = false;
    }
    else{
        Containery.style.display = 'none';
        Clickedy = true;
    }
}


