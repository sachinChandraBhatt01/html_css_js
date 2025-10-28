let text = document.querySelector("h5");

let btn = document.querySelector(".add-remove");

let indx = 0;

btn.addEventListener("click" ,()=>{
    if(indx == 0){
        text.innerHTML = "Friends";
        text.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.classList.add("remove")
        indx = 1;
    }else{
        text.innerHTML = "Stranger";
        text.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.classList.remove("remove");
        indx = 0;
    }
})


