// for-each loop does not return anything if we store the result in a variable
const coding = ["c", "cpp", "go", "rust"]
const values = coding.forEach((item) => { return item })

console.log(values);
console.log();

// filter function 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = nums.filter((n) => n > 5)
const n = nums.filter((n) => { return (n % 2) == 0})

console.log(result);
console.log(n);

// we can do the same thing with for-each also
const ary = []

nums.forEach((n) => {
    if (n > 5) {
        ary.push(n)
    }
})

console.log(ary);
console.log();

// some more examples 
const booksData = [
    {bookName: "one", published: 1987, edition: 2003, genre: "fiction"},
    {bookName: "two", published: 1987, edition: 2003, genre: "non-fiction"}, 
    {bookName: "three", published: 1987, edition: 2003, genre: "history"}, 
    {bookName: "four", published: 1987, edition: 2003, genre: "fiction"}, 
    {bookName: "five", published: 1987, edition: 2003, genre: "non-fiction"}, 
    {bookName: "six", published: 1987, edition: 2003, genre: "fiction"}, 
    {bookName: "seven", published: 1987, edition: 2003, genre: "fiction"}, 
    {bookName: "eight", published: 1987, edition: 2003, genre: "history"}, 
    {bookName: "nine", published: 2007, edition: 2008, genre: "fiction"}, 
    {bookName: "ten", published: 1997, edition: 2014, genre: "history"}, 
]

const data = booksData.filter((book) => book.genre == "history")

console.log(data);
console.log();

// map function
const numbers = [10, 20, 30, 40, 50]
const mp = numbers.map((n) => n - 5)

console.log(mp);
console.log();

// chaining of functions
const matrixData = [1, 2, 3, 4, 5]

const newData = matrixData
                .map((n) => n * 10)
                .map((n) => n + 5)
                .filter((n) => n > 35)

console.log(newData);
console.log();

// reduce function
// accumulator, initial value and current value parameters 
// accumulator is container
// current value is array's element
// initial value is accumulator's initial value
const vals = [3, 8, 2]

const red = vals.reduce((acc, currVal) => {
    console.log(`accumulator: ${acc}, current value: ${currVal}`);
    return acc + currVal
}, 2)

console.log(red);
