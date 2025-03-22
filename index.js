"use strict";
let btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("text").innerHTML = data;
    })
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

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
// let list = document.getElementById("list");
//     if(this.readyState == 4 && this.status == 200){
//        let response = JSON.parse(xhr.responseText);
//         let people = response.people;
//           console.log(response.people);

//        let output = " ";
//        for(let i = 0; i < people.length; i++){
//         output += "<li>" +response.people[i].name+ "</li>";
//        }
//        list.innerHTML = output;

//     }
// };
// xhr.open("GET", "index.json", true);
// xhr.send();

