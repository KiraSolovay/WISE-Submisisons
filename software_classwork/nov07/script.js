let titleEl = document.getElementById('title');
// OR: let titleEl = document.querySelector(.main-title);
console.log(titleEl);
console.dir(titleEl);

let paragraph = document.querySelector('p');
console.log(paragraph);

// query selector only selects one thing

// replace text in paragraph
paragraph.textContent = "This is some new text!";

// make the paragraph blue
paragraph.style.color = "blue";

// for css styles w multiple words use camelCase
paragraph.style.backgroundColor = "pink";

// adds a class to an element
titleEl.classList.add("look-a-title");

// removes a class from an element
titleEl.classList.remove("look-a-title");

// toggles a class list
titleEl.classList.toggle("title-two");

// boolean check if class is present
console.log(titleEl.classList.contains('title-two'));

// get multiple elements at once
// query selector ALL
let commentEls = document.querySelectorAll("li");
console.log(commentEls);

// affect every element of that node list
for (let commentEl of commentEls) {
    commentEl.style.fontSize = '30px';
    console.log(commentEl);
}