// EXAMINE THE DOM
// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //documet.title = 123
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]); //select the first form of the document
// console.log(document.links);
// console.log(document.images);

// Selecting elements and using methods to change them //
// getElementById
// textContent
// innertext
// innerHTML
// style
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye'; // innerText pay attention to the style (most of the time we can use textContent/innerText interchangeably)
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>'; // the h3 is now inside the h1 (innerHTML put the selected element inside the parent element)
// header.style.borderBottom = 'solid 3px #000';

// // GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// //give all the items the same background color
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// // GETELEMENTBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// // give all the items the same background color
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// // QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px #ccc';

// let input = document.querySelector('input'); // it grabs only the first items on the DOM
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red'; // get the fist one on the page

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';
// secondItem.style.fontSize = '26px';

// //  QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hellos';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// //  TRAVERSYNG THE DOM (query parents/children/siblings..) //
let itemList = document.querySelector('#items'); // (the <ul></ul>)
// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// // parentElement (for the most part same as parentNode)
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// // childNodes
// console.log(itemList.childNodes); //try to avoid this because it consider also all the white space and breaks between the nodes
// console.log(itemList.children); // (use this)
// console.log(itemList.children[1]);
// console.log((itemList.children[1].style.backgroundColor = 'yellow'));

// // firstChild
// console.log(itemList.firstChild); // avoid, it consider all the white space and breaks between the nodes as well
// // firstElementChild
// console.log(itemList.firstElementChild); // use this
// itemList.firstElementChild.textContent = 'Hello 1456';

// // lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// console.log(itemList.nextSibling); // as the previous
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';
//

// // CREATE ELEMENT (createElement) //

// // Create a div
// let newDiv = document.createElement('div');
// // Add class
// newDiv.className = 'hello';
// // Add id
// newDiv.id = 'hello1';
// // Add attribute
// newDiv.setAttribute('title', 'Hello Div');
// // Create text node (text inside the div)
// let newDivText = document.createTextNode('Hello Worlddd');
// // Add text to div ( append the text to the div, to see it on the page)
// newDiv.appendChild(newDivText);
// // Insert the div into the DOM:
// // grab the container class inside the header
// let container = document.querySelector('header .container');
// // grab the h1
// let h1 = document.querySelector('header h1');
// // insert the div
// container.insertBefore(newDiv, h1);
// // styling the div
// newDiv.style.fontSize = '40px';

// console.log(newDiv);
// //

// // EVENT LISTENER //
// let button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick);

// // function buttonClick() {
// //   // console.log('Button clicked');
// //   document.getElementById('header-title').textContent = 'Changed';
// //   document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// // }

// function buttonClick(e) {
//   console.log(e);

//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
let output = document.getElementById('output');
// output.innerHTML = `<h3>${e.target.id}</h3>`;

//   console.log(e.type);
//   console.log(e.clientX); // position of the mouse from the start of the browser window
//   console.log(e.clientY);

//   console.log(e.offsetX); // positon of the window from the start of the element
//   console.log(e.offsetY);

//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }
//

// MOUSE EVENTS //
let button = document.getElementById('button');
let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // fires of for any inner element
// box.addEventListener('mouseout', runEvent); // fires of for any inner element

// box.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

// output.innerHTML = `<h3> MouseX: ${e.offsetX}</h3> <h3> MouseY: ${e.offsetY}</h3>`;

// box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40`;
// document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40`;
// }

// KEYBOARD AND INPUT EVENTS

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent); // when the user click inside (focus in)
// itemInput.addEventListener('blur', runEvent); // (focus out)
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   // console.log(e.target.value); // catch what the user tipe in the selected field
//   // document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`; //..and put it in the output field
// }

// submit event
form.addEventListener('submit', runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);
}
