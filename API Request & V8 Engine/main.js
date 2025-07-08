const requestUrl = 'https://api.github.com/users/proficiencyhub95'
const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl)

xhr.onreadystatechange = function() {
    console.log(xhr.readyState); // prints the current state 

    if (xhr.readyState === 4) {
        const data = this.responseText // this is in string not Json
        const newData = JSON.parse(data)
        console.log(newData.following);
    }
}

xhr.send()