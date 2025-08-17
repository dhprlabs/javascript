const title = document.getElementById("title");
const paras = document.querySelectorAll("p");

title.innerText = "DOM Updated Successfully!";
title.innerHTML = "<span style='color:red'>DOM Updated!</span>";

title.style.backgroundColor = "lightblue";
title.style.padding = "10px";

const newDiv = document.createElement("div");
newDiv.innerText = "This is a dynamically created div!";
document.body.appendChild(newDiv);

setTimeout(() => newDiv.remove(), 3000);

const button = document.querySelector("#clickMe");
button.addEventListener("click", () => {
    alert("Button was clicked!");
});

console.log("innerText:", title.innerText);       // considers CSS (e.g., hidden text ignored)
console.log("textContent:", title.textContent);   // raw text, includes hidden