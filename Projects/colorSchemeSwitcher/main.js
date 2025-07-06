let body = document.querySelector("body")
let btns = document.querySelectorAll('.button')

function changeColor(e) {
    console.log(e);
    console.log(e.target); 
    let color = e.target.id
    body.style.backgroundColor = color
}

btns.forEach((btn) => {
    btn.addEventListener('click', changeColor)
})