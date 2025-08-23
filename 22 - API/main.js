// === XMLHTTPREQUEST (XHR) DEMO ===

const requestUrl = 'https://api.github.com/users/dhprlabs';
const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);

xhr.onreadystatechange = function () {
    console.log('XHR readyState:', xhr.readyState);
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(this.responseText);
            console.log('XHR Following:', data.following);
        } else {
            console.error('XHR Error:', xhr.status);
        }
    }
};

xhr.send();

// === FETCH API DEMO ===

fetch(requestUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log('Fetch Following:', data.following))
    .catch(error => console.error('Fetch Error:', error));

// === ASYNC/AWAIT DEMO ===

async function fetchUser() {
    try {
        const response = await fetch(requestUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Async/Await Following:', data.following);
    } catch (error) {
        console.error('Async/Await Error:', error);
    }
}

fetchUser();