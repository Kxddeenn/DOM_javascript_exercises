// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// a <p> with red text that says “Hey I’m red!”

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);


 // an <h3> with blue text that says “I’m a blue h3!”

 const blueText = document.createElement("h3");
 blueText.style.color = "blue";
 blueText.textContent = "I'm a blue h3!";
 container.appendChild(blueText);

/* a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const example = document.createElement("div");
example.style.backgroundColor = "pink";
example.style.border = "black";

const header = document.createElement("h1");
header.textContent = "I'm in a div";

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";

example.appendChild(header);
example.appendChild(paragraph2);

container.appendChild(example);
