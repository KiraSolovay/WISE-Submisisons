// create a variable that is the button (btn)
const btn = document.querySelector('button');
// create a variable that is the input box
const input = document.querySelector('input');
// create an Event Listener - when button is clicked, do this
btn.addEventListener('click', function (event) {
    const li = document.createElement('li');
    console.log(li);
    console.dir(input);
    li.textContent = input.value;
    document.querySelector('ul').appendChild(li)
    input.value=""
})

const outside= document.getElementById('outside');

outside.addEventListener('click', (event) => {
    console.log(event.target)
})

function handleClick(event) {
    console.log(event.target.textContent)
}

document.querySelector('ul').addEventListener('click', handleClick)