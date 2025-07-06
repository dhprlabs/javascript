const startPrint = (arg) => {
    console.log(arg);
}

const begin = document.querySelector("#start")
const end = document.querySelector("#stop") 


begin.addEventListener("click", () => {
    const beginPrint = setInterval(startPrint, 2000, "under the hood")
})

end.addEventListener("click", () => {
    clearInterval(beginPrint)
})