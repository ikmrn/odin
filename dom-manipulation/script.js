// JavaScript

// Create red paragraph
const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey, I'm red!";

// Create blue heading
const blueHeading = document.createElement("h3");
blueHeading.style.color = "blue";
blueHeading.textContent = "Hey, I'm blue";

// Create styled div
const styledDiv = document.createElement("div");
styledDiv.style.borderColor = "black";
styledDiv.style.borderStyle = "solid";
styledDiv.style.backgroundColor = "pink";

// Create element to include in div
const meTooParagraph = document.createElement("p");
const divHeading = document.createElement("h1");
divHeading.textContent = "I'm in a div";
meTooParagraph.textContent = "ME TOO!";

// Append all elements
styledDiv.appendChild(divHeading);
styledDiv.appendChild(meTooParagraph);

const body = document.querySelector("body");
body.appendChild(redParagraph);
body.appendChild(blueHeading);
body.appendChild(styledDiv);
