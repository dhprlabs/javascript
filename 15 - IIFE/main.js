(function coffee() {
    console.log("coffee prepared :)");
})();

(() => { 
    console.log("snacks prepared :)");
})();

((item) => { 
    console.log(`${item} prepared :)`);
})("drinks");
