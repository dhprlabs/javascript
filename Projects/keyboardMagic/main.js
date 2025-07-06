const insertText = document.querySelector("#insert")

function makeTable(e) {
    insertText.innerHTML = 
    `<table>
    <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === " " ? "__" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>`
}

window.addEventListener("keydown", makeTable)