"use strict";
let btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor = "green";
})

// let person = {
//     name: "efoe Max",
//     age: 17,
//     school: "university of buea"
// }
// console.log(person);

// person = JSON.stringify(person);
// console.log(person);

// person = JSON.parse(person);
// console.log(person);

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
       let response = xhr.responseText
       console.log(response.people);
    }
};
xhr.open("GET", "index.json", true);
xhr.send();