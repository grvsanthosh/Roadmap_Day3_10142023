// ***********************Anonymus fundtion***************************

// a Print odd numbers in an array

(function (arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i]%2 !== 0){
            console.log(arr[i]);
        }
    }
})([1,2,3]);


// b Convert all the strings to title caps in a string array


(function (input){
    input = input.toLowerCase().split(" ");
    for (let i = 0; i < input.length;i++)
    {
        input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }
    return console.log(input.join(' '));
    
})("this is titlecase");


// c Sum of all numbers in an array

var output = new Number;
(function (input){
    for ( let value of input){
        output = output + value;
    }
})([1,2,3]);

console.log(output);

// d Return all the prime numbers in an array

(function (input){
    for ( let value of input){
        if ( (value !== 2) && (value%2 === 0) || (value !== 3) && (value%3 === 0) || (value !== 5) && (value%5 === 0) || (value !== 7) && (value%7 === 0) || (value === 1) || (value === 0)) {
                
                
            }
        else {
            console.log(value);
        }
    }
})([1,2,3,4,5,6]);

// e Return all the palindromes in an array

var k = 0;
var flag = true;
(function (arr){
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
})(["MOM","DAD","cycle"]);

// f Return median of two sorted arrays of the same size.


var ar1 = [1, 12, 15, 26];
var ar2 = [2, 13, 17, 30];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2){
(function (ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
   
    var m1 = -1, m2 = -1;
    
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return console.log((m1 + m2)/2);
})(ar1, ar2, n1);
}

else{
    console.log("unequal arry");
}     
    

// g Remove duplicates from an array

var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
var n = arr.length;
var output = [];
var re = new Number;

(function (arr, n)
{
    
    if (n==0 || n==1)
        return re = n;
 
    var temp = new Array(n);
 
    var j = 0;
    for (var i=0; i<n-1; i++)
 
 
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];

    temp[j++] = arr[n-1];

    for (var i=0; i<j; i++)
        arr[i] = temp[i];
 
    return re = j;
})(arr, n);


for (let i = 0; i < re; i++){
  output[i] = arr[i]
}
console.log(output);


// h Rotate an array by k times


var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
var output = [];

(function (a, n, k)
{

	k = k % n;

	for (let i = 0; i < n; i++) {
		if (i < k) {

			output[i] = a[n + i - k];
		}
		else {

			output[i] = a[i - k];
		}
	}

})(Array,N,K);

console.log(output);

