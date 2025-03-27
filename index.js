"use strict";
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", ()=>{
//     fetch("sample.txt")
//     .then((res) => res.text())
//     .then((data) => {
//         document.getElementById("text").innerHTML = data;
//     })
// })


// let btnn = document.querySelector(".btnn");
// btnn.addEventListener("click", ()=>{
//     fetch("index.json")
//     .then((res) => res.json())
//     .then((data) => {
//         let output = "<h2> Users </h2>";
//         data.forEach(function(info){
//             output += `
//               <ul>
//               <li> ${info.name}</li>
//               <li> ${info.age}</li>
//               </ul>
//             `;
//         });
//         document.getElementById("text").innerHTML = output;
//     })
// });

// let btnnn = document.querySelector(".btnnn");
// btnnn.addEventListener("click", ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//         let output = "<h2>Users Post</h2>";
//         data.forEach(function(info){
//             output += `
//               <ul>
//               <li>ID: ${info.id}</li>
//               <li>Title: ${info.title}</li>
//               <li>Body: ${info.body}</li>

//               </ul>
//             `;
//         });
//         document.getElementById("text").innerHTML = output;
//     })
// });


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

// let notify = document.querySelector(".notify");
// notify.addEventListener("click", (e) => {
//     Notification.requestPermission().then(perm => {
//         if(perm === "granted"){
//             new Notification("Hello Welcome On Board", {
//                 body: "We are Afrilearn",
//                 icon:"icon.png",
//                 tag: "working"
//             })
//         }
//     })
// })