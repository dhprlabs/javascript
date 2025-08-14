function one() {
    const username = "proficinecyhub95"

    function two() {
        const website = "https://proficiencyhub.com"
        console.log(`inside two - ${username}`);
    }

    console.log(website);
    
    two();
}

one();

console.log();
console.log(`function - ${addOne(5)}`);

function addOne(n) {
    return n + 1
}

console.log();
console.log(`function - ${addTwo(5)}`);

const addTwo = function(n) {
    return n + 2
}