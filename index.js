//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(a, b) {
    return Number(a) + Number(b)
}
let sum = calculateSum(120,1005)
console.log(sum)

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(a) {
    if(Number(a) % 2 === 0){
        return "true"
    }else{
        return "false"
    }
}
let checkForEven = isEven(1202)
console.log(checkForEven)

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(a) {
    if (a.length === 0) {
        throw new Error("Array cannot be empty");
    }
    let maxNumber = a[0]
    for (let i = 1; i < a.length; i++) {
        if (a[i]>maxNumber) {
            maxNumber = a[i];
        }
    }
    return maxNumber
}
let findMaxNumber = findMax([1,5020,3,4,5,6,700,8,-999,0])
console.log(findMaxNumber)

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(a) {
    if (a === "") {
        return "";
    }
    let reverseStr = [...a]
    let result =""
    for (let i = reverseStr.length-1; i >= 0; i--) {
        result += reverseStr[i] 
    }
    return result
}

let stringReverse = reverseString("Ostad!")
console.log(stringReverse)

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(a) {
    if (a.length === 0) {
        return a
    }
    let finalArray = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            finalArray.push(a[i])
        }
    }
    return finalArray
}

let newArray = filterOddNumbers([1,-5,3,4,5,6,-6,8,-9,10,2,3,6])
console.log(newArray)

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(a) {
    if (a.length === 0) {
        return a
    }
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    return sum
}

let sumOfArray = sumArray([1,200,2,330,50,6])
console.log(sumOfArray)

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(a) {
    if (a.length === 0) {
        return a
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[j] > a[j+1]) {
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp            }
        }  
        // 1,2,200,50,-6,(330)->sorted
        // 1,2,50,-6,(200,330)->sorted
        // 1,2,-6,(50,200,330)->sorted
        // 1,-6,(2,50,200,330)->sorted
        // -6,(1,2,50,200,330)->sorted
        // (-6,1,2,50,200,330)->sorted
    }
    return a
}

let sortingOfArray = sortArray([1,200,2,330,50,-6])
console.log(sortingOfArray)

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

function capitalizeFirstLetter(a) {
    if (a === "") {
        return "";
    }
    let charArr = [...a]
    if (charArr[0] >= 'a' && charArr[0]<= 'z') {
        charArr[0] = String.fromCharCode(charArr[0].charCodeAt(0) - 32);
    }
    
    for (let i = 1; i < a.length; i++) {
        if (i>0 && charArr[i] >= 'A' && charArr[i]<='Z') {
            charArr[i] = String.fromCharCode(charArr[i].charCodeAt(0) + 32);
        }
    }
    return charArr.join("")
}

let capitalizedStr = capitalizeFirstLetter("oSTAD")
console.log(capitalizedStr)
