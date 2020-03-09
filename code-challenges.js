// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"


//creating a function that takes in a string
const codedMes = (str) => {
// changing a spacific letter to a number
    str = str.replace(/a/gi, 4)
    str = str.replace(/e/gi, 3)
    str = str.replace(/i/gi, 1)
    str = str.replace(/o/gi, 0)
//returning the result
    return str
}

// console.log(codedMes(secretCodeWord1))



// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

// var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//creating a function that takes in an array
const onlyA = (arr) => {
//
    newArr = arr.filter(arr => arr.includes("a") || arr.includes("A"))
    return newArr
}

// console.log(onlyA(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false

const myCode = (string) =>{
  let resultStr=""
}

// aaaaaaannndd i struggled on this for a while :(



