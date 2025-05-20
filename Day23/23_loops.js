// for loop
console.log("basic for-loop :");

for (let i = 0; i < 5; i++) {
    const el = i;
    console.log(el + 1);
}

// nested for loop
console.log();
console.log("nested for-loop :");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`(${i + 1}, ${j + 1})`);
    }
}

// for each loop
console.log();
console.log("for-each loop :");

let array = [34, 84, 67]

array.forEach(element => {
    console.log(`values : ${(element * 0.5) + 5}`);
});

// break and continue
console.log();
console.log("break and continue :");

for (let index = 0; index < 10; index++) {
    if (index > 5) {
        break;
    }
    if (index % 2 == 0) {
        console.log("even");
        continue;
    }
    else {
        console.log("odd");
    }
}