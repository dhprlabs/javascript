// there is an onclick property in the img tag but it is not scalable 
// instead we have a better approach
const roadTreesImg = document.getElementById("roadTrees")

roadTreesImg.onclick = () => {
    console.log("roadTrees image clicked")
}

// now, i will use the addEventListener()
// it has 3 arguments : eventType, callbackFunction, booleanValue
// the third argument can be true or false
// for image capturing phase and bubbling phase 
// stopPropogation() for stoping the two phases
const ulElement = document.getElementById("images")

function ulElementClick(e) {
    console.log("ul was clicked !!");
}

// false for bubbling, true for capturing
ulElement.addEventListener('click', ulElementClick, false)

const autumnPure = document.getElementById("autumnPure")

function autumnClick(e) {
    e.stopPropogation
    console.log("autumnPure image clicked")
}

autumnPure.addEventListener('click', autumnClick, false)

// must see the following events in the event object
// type, timestamp, defaultPrevented
// target, srcElement, toElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode 
// now, we will see the use of preventDefault() 
function googleTagClick(e) {
    e.preventDefault()
    console.log("google tag clicked")
}

document.getElementById("googleTag").addEventListener('click', googleTagClick, false)

// remove the child by accessing the parent node
function removeChildren(e) {
    console.log(e.target);
    if (e.target.tagName == 'IMG') {
        let removeEl = e.target.parentNode
        removeEl.remove()
    }
}

document.querySelector('#images').addEventListener('click', removeChildren, false)