const typeTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

// console.log(typeTextSpan);
// console.log(cursor);

document.addEventListener('DOMContentLoaded' , ()=>{
    if(words.length){
        setTimeout(type , typeDelay);
    }
})

const words = ["Awesome" , "Fun" , "Cool" , "Life" , "Famous" , "Wierd" , ];
const typeDelay = 200;
const erasingDelay = 200;
//Delay between current and new letter
const newLetterDelay = 200;
let index = 0;
let charIndx = 0;

function type(){
    if(charIndx<words[index].length){
        typeTextSpan.textContent += words[index].charAt(charIndx);
        charIndx++;
        setTimeout(type , newLetterDelay);
    } else{
        setTimeout(erase , newLetterDelay);
    }
}

function erase(){
    if(charIndx>0){
        typeTextSpan.textContent = words[index].substring(0 , charIndx -1);
        charIndx--;
        setTimeout(erase , erasingDelay);
    }else{
        index++;
        if(index>=words.length){
            index=0;
        }
        setTimeout(type , typeDelay + 1100);
    }
}

