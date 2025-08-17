const roadTreesImg = document.getElementById("roadTrees")

roadTreesImg.onclick = () => {
    console.log("roadTrees image clicked")
}

const ulElement = document.getElementById("images")

function ulElementClick(e) {
    console.log("ul was clicked !!");
}

ulElement.addEventListener('click', ulElementClick, false)

const autumnPure = document.getElementById("autumnPure")

function autumnClick(e) {
    e.stopPropogation
    console.log("autumnPure image clicked")
}

autumnPure.addEventListener('click', autumnClick, false)

function googleTagClick(e) {
    e.preventDefault()
    console.log("google tag clicked")
}

document.getElementById("googleTag").addEventListener('click', googleTagClick, false)

function removeChildren(e) {
    console.log(e.target);
    if (e.target.tagName == 'IMG') {
        let removeEl = e.target.parentNode
        removeEl.remove()
    }
}

document.querySelector('#images').addEventListener('click', removeChildren, false)