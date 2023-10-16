// Do the below programs in arrow functions.


// a. Print odd numbers in an array

((arr) => {
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i]%2 !== 0){
            console.log(arr[i]);
        }
    }
})([1,2,3]);




// b. Convert all the strings to title caps in a string array

var output;
const titlecaseval = (input) => {
    input = input.toLowerCase().split(" ");
    for (let i = 0; i < input.length;i++)
    {
        input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }
    return input.join(' ');
    
};

output = titlecaseval("this is titlecase");
console.log(output);




// c. Sum of all numbers in an array

var output = new Number;
const sumofarr = (input) => {
    for ( let value of input){
        output = output + value;
    }
}

sumofarr([1,2,3]);
console.log(output);

// d. Return all the prime numbers in an array

const sumofarr = (input) => {
    for ( let value of input){
        if ( (value !== 2) && (value%2 === 0) || (value !== 3) && (value%3 === 0) || (value !== 5) && (value%5 === 0) || (value !== 7) && (value%7 === 0) || (value === 1) || (value === 0)) {
                
                
            }
        else {
            console.log(value);
        }
    }
}

sumofarr([1,2,3,4,5,6]);




// e. Return all the palindromes in an array

var k = 0;
var flag = true;
const input = (arr) => {
    for (var i = 0; i < arr.length; i++){
        k = arr[i].length - 1;
        for (var j = 0;j < arr[i].length && k >= 0;j++){
            if (arr[i][j] !== arr[i][k]){
                flag = false;
                break;
            }
            
            k--;
        }
        if (flag == true){
               console.log(arr[i]);
            }
    }
};
input(["MOM","DAD","cycle"]);