const form = document.querySelector('form')

function formCallback(e) {
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const ratio = (weight) / ((height * height) / 10000).toFixed(2)
    
    document.querySelector('#results').innerHTML = `<span>${ratio}</span>`
}

form.addEventListener('submit', formCallback)