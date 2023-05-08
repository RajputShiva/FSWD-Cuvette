// let element = document.getElementById('head1')
// console.log(element);
// element.innerText = "changed using js"

// let element = document.getElementsByClassName("para")[0];
// // console.log(element[0].innerHTML);
// console.log(element.innerText); // hello world (innerText only given text)
// console.log(element.innerHTML); // hello <b>world</b> (innerHTM it is given everything what you write in element)


// 1. create a new p element

let p = document.createElement('p')

// 2. write the content or any other attributes or styles

p.innerText = 'added dynamically using js'
p.setAttribute('id','p1');
let att = p.getAttribute('id');

console.log(p);
console.log(att);

//3. add any element to the page

let body = document.getElementsByTagName('body')[0];
// or this way also use 
//document.body

body.appendChild(p);

// how to create an image

// let image = document.createElement('img');
// console.log(image);
// image.src = "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg";

//aur hum aise isme styling bhi kr skte hain kuch bhi

// image.style.border = "10px solid orange";
// image.style.borderRadius = "10px";
// body.appendChild(image);

// or this way we are create an image

// image.setAttribute('src',"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg");
// console.log(image);
// // aur hum aise isme styling bhi kr skte hain kuch bhi
// image.style.border = "10px solid orange";
// image.style.borderRadius = "10px";
// body.appendChild(image);

// or this way we are create an image without any document method

// const img = new Image(400, 400); // width, height
// console.log(img);
// img.src = "https://picsum.photos/200/301";
// document.body.appendChild(img);

// its event in js

// let button = document.getElementsByTagName('button')[0];
// button.onclick = function() {
//     console.log('button is clicked');
// }

// its eventListeners in js

let button = document.getElementsByTagName('button')[0];
//button.addEventListener('event','function') // is addEventListener ke under two parametre hote hain first is event(event jo jo hain wo lick skte hain jaise :- click,keypress,...etc)  and second is function( any function name).
button.addEventListener('click', print)

function print (){
    console.log('button is clicked but this time using event listener :-');
}
//document.body.addEventListener("keypress", print) // keypress se hum body ke kahi bhi click krenge to click hota hain

// we can create this way also

// button.addEventListener('click',
//     function (){
//         console.log('button is clicked but this time using event listener');
//     }
// )