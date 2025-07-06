let randNum = parseInt((Math.random() * 100) + 1)

const submitBtn = document.querySelector('#subt')
const guessSlot = document.querySelector('#guessField')
const prevGuess = document.querySelector('.guesses')
const lastGuess = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const resParas = document.querySelector('.resultParas')

const p = document.createElement('p')

let guesses = []
let numGuess = 1
let playGame = true

if (playGame) {
    submitBtn.addEventListener('click', clickCallback)
}

function clickCallback(e) {
    e.preventDefault()
    const val = parseInt(guessSlot.value)
    valGuess(val)
}

function valGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 to 100")
    }
    else {
        guesses.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMsg(`GAME OVER !! Random number was ${randNum}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randNum) {
        displayMsg("You guessed it right")
    } 
    else if (guess < randNum) {
        displayMsg("Guess is too low")
    }
    else {
        displayMsg("Guess is too high")
    }
}

function displayGuess(guess) {
    guessSlot.value = ''
    prevGuess.innerHTML += `${guess} `
    numGuess++
    lastGuess.innerHTML = `${11 - numGuess}`
}

function displayMsg(msg) {
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame() {
    guessSlot.value = ''
    guessSlot.setAttribute('disabled', '')
    p.classList.add('btn')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    resParas.appendChild(p)
    playGame = false
    newGame()
}

function newGameCallback(e) {
    guesses = []
    numGuess = 1
    randNum = parseInt((Math.random() * 100) + 1)
    prevGuess.innerHTML = ''
    lastGuess.innerHTML = `${11 - numGuess}`
    guessSlot.removeAttribute('disabled')
    resParas.removeChild(p)
    playGame = true
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', newGameCallback)
}