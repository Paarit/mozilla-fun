 let myImage = document.querySelector('img');

 myImage.onclick = function() {
     let mySrc = myImage.getAttribute('src');
     if(mySrc === 'Images/img1.jpg'){
         myImage.setAttribute('src','Images/img2.jpg');
     } else{
             myImage.setAttribute('src','Images/img1.jpg');
     }
 }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + + storedName;
}

myButton.onclick = function(){
    setUserName();
}




/* Practice code

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('img').onclick = function() {
    alert('Ouch! Stop poking me!');
} */

/*This is a comment*/
//This is a comment too only if there are no line breaks.
