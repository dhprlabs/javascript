const clk = document.getElementById('clock')

function showTime() {
    const dt = new Date()
    clk.innerHTML = dt.toLocaleTimeString()
}

setInterval(showTime, 1000)