// generate random color
function genRandomColor() {
    let hex = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hex[ Math.floor(Math.random() * 16)]
    }

    return color
}

// start and stop logic
let intId;

function changeBackColor() {
    if (!intId) {
        intId = setInterval(changeColor, 1000)
    }
    const changeColor = () => document.body.style.backgroundColor = genRandomColor()
}

function stopBackColor() {
    clearInterval(intId)
    intId = null // dereferencing variable
}

document.querySelector("#start").addEventListener("click", changeBackColor)
document.querySelector("#stop").addEventListener("click", stopBackColor)
