// EXAMINE THE DOM
// console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//documet.title = 123
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]); //select the first form of the document
console.log(document.links);
console.log(document.images);

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

//  GETELEMENTSBYCLASSNAME //
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

// GETELEMENTBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// //give all the items the same background color
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
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
// secondItem.style.color = 'coral';

//  QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSYNG THE DOM (query parents/children/siblings..)
let itemList = document.querySelector('#items');
// parentNode
