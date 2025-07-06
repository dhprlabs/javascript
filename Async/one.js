const myRank = () => {
    console.log("second");
}

const changeHeading = () => {
    const h = document.querySelector(".heading")
    h.innerHTML = "At My Best"
}

setTimeout(myRank, 3000)
const changingH = setTimeout(changeHeading, 5000)

console.log("first");
console.log("third")

const b = document.querySelector("#btn")

b.addEventListener("click", () => {
    clearTimeout(changingH)
    console.log("stopped");
})