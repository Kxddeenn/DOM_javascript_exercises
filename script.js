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

