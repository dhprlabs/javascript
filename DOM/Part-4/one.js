// add 
function addLang(langName) {
    const li = document.createElement('li')
    li.innerHTML = langName
    document.querySelector('.languages').appendChild(li)
}

addLang("Python")
addLang("Rust")

// optimized add
function addOptimizedLang(langName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${langName}`))
    document.querySelector('.languages').appendChild(li)
}

addOptimizedLang("Go")
addOptimizedLang("Ruby")

// edit
function editList(n, name) {
    const li = document.querySelector(`li:nth-child(${n})`)
    // li.innerHTML = name
    // li.outerHTML = `<li>${name}</li>`
    const newLi = document.createElement('li')
    newLi.textContent = name
    li.replaceWith(newLi)
}

editList(3, "Mojo")

// remove 
function removeLi(n) {
    const li = document.querySelector(`li:nth-child(${n})`)
    li.remove()
}

removeLi(6)