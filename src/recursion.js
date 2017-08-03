// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
/*global $*/
var factorial = function(n) {
    
    if(n === 0 ){
        return 1;
    }else if(n < 0){
        return null;
    }else{
    
    return n * factorial(n - 1);
    }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

   var sum = function(array){
   
      if(array.length === 0 ){
       
        return 0
      }else {
      
         return array[array.length-1] + sum(array.slice(0, array.length - 1))
      }
      
      
    
  
};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    
      if(array.length === 0 ){
       
        return 0
      }else if( typeof array[array.length-1]  === 'object'){
        
        if(array[array.length-1].length === 0){
          return 0
        }else{
        var nested = array[array.length-1]
          return arraySum(nested) + arraySum(array.slice(0, array.length - 1))
        }
        
      }else{
      
         return array[array.length-1] + arraySum(array.slice(0, array.length - 1))
      }
}

// 4. Check if a number is even.
var isEven = function(n) {
    
    if(Math.abs(n/2) === 1 || n === 0){
      
        return true;
    
    }else if(Math.abs(n/2) < 1){
       
        return false;
        
    }else{
  
        return  isEven(Math.abs(n)-2);
    }
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0){
    return 0
  }else if(n > 0){
    n -= 1
    return n + sumBelow(n);
  }else{
    n += 1
    return n + sumBelow(n)
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var result = [];
  if(Math.abs(x - y) < 2 ){
    return result;
  }else if(x < y){
    
      result.push(x+1)
      return result.concat(range(x+1, y))
    
  }else {
   
    
      result.push(x-1)
       return result.concat(range(x-1, y))
    
  }
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  
    if(exp === 0){
      return 1
    }else if (exp === 1){
      return base
    }else if (exp === -1){
      return 1/base
    }else{ 
      if(exp > 1){
        return base * exponent(base, exp-1);
          
      }else if (exp < -1){
        
      return parseFloat(((1 / base)* exponent(base, exp+1)).toFixed(5));
    }
    }
   
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n/2 === 1 || n === 1){
    return true
  }else if(n > 1){
    return powerOfTwo(n/2)
  }else{ 
    return false
  }
};


// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if(string.length === 1){
    return string[0]
  }else{
    return string[string.length-1] + reverse(string.slice(0, string.length-1))
  }
  
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.split(' ');
  string = string.join("")
  if(string.length < 2){
    
    return true
  }else if(string[0].toLowerCase() === string[string.length-1].toLowerCase()){
    
    return palindrome(string.slice(1,string.length-1))
  }else{
    
    return false
  }
  
  
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if(x > 0){
    if(y > 0){
      return x < y ? x: modulo(x-y,y)
    }else{
      return x < -y ? x: modulo(x+ y, y)
    }
    
  }else if(x === 0 && y === 0){
    return NaN
    
  }else{
    if(y < 0){
      return -x < -y ? x: modulo(x-y,y)
    }else{
      return -x <  y ? x: modulo(x + y, y)
    }
  }
};



// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if(y === 0){
    return 0
  }else if(y > 0){
    
    return x + multiply(x,y-1)
    
  }else{
    if(x < 0){
     
      return -x + multiply(x,y+1)
    }else{
    return x + multiply(x,y+1)
    }
    
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
     if(y === 0){
    return NaN
  }
  if(x < 0){
    if(y < 0 ){
      if(x - y > 0 ){
        return 0
      }else{
        return 1 + divide(x-y,y)
      }
    }else if( x + y > 0){
      return 0
    }else{
      return -1 + divide(x-y,y)
    }
    
  }else{
    if(y > 0 ){
      if(x - y < 0 ){
        return 0
      }else{
        return 1 + divide(x-y,y)
      }
    }else if( x + y < 0){
      return 0
    }else{
      return -1 + divide(x+y,y)
    }
    
  }
};
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  var high = x > y ? x: y;
  var low = x < y ? x: y
  
  if(x < 0 || y < 0){
    return null;
  }
 
  var res = modulo(high, low)
  if(res === 0){
    
    return low;
  }else{
   
    return gcd(res, low)
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(!str1.length === str2.length){
    return false;
  }
  
  if(str1.length < 2 && str2 === str1){
    return true
  }else if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1))
    
  }else{ 
    return false
  }
  
  };

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  var res = [];
  res.push(str[0]);
  if(str.length === 1){
    return res
  }else {
    return  res.concat(createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if(array.indexOf('len') === -1){
    array.unshift('len');
    return reverseArr(array)
  }else if(array[array.length - 1] !== 'len'){
   array.splice(array.indexOf('len'), 0, array.pop())
    return reverseArr(array);
                        
  }else{
    array.pop();
    return array;
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length){
  var res = [];
  if(length > 0){
    res.push(value)
    return res.concat(buildList(value, length-1))
  }else{
    return res
  }
}
// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
 
  if(array[0] === value && array.length > 1){
    return 1 + countOccurrence(array.slice(1), value)
  }else if (array.length > 1){
    return countOccurrence(array.slice(1), value)
  }else{

    return array[0] === value ? 1: 0
  }
  
  
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var count = Array.from(arguments)[2] || 0
  var res = [];
  
  if (count  === array.length){
    return res
  }else{
    res.push(callback(array[count]))
    return res.concat(rMap(array, callback, ++count))
  }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;
  for (let i in obj){
    if ( i === key){
      count++;
    }
    if(typeof obj[i]  === 'object'){
     
      count +=countKeysInObj(obj[i], key);
    }
  }
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for (let i in obj){
    if ( obj[i] === value){
      count++;
    }
    if(typeof obj[i]  === 'object'){
     
      count +=countValuesInObj(obj[i], value);
    }
  }
  return count;
  
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for(let i in obj){
    if(i == key){
      obj[newKey] = obj[key];
      delete obj[key];
    }
    if(typeof obj[i] === 'object'){
      replaceKeysInObj(obj[i], key, newKey);
    }
  }
  return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
   
   if(n < 1){
    return n > 0 ? [0]: null
  }
  if (n < 2) {
        return [0, 1];   
    }
    if (n < 3) {
        return [0, 1, 1];
    }

    var a = fibonacci(n - 1);
    a.push(a[n - 1] + a[n - 2]);
    return a;
};
  

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
   var res = []
  if(n <= 0){
   
    return n === 0? 0: null
  }else if(n <= 2){
    return 1
  }else{
    return nthFibo(n-1) + nthFibo(n-2)
  }
  

};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  var output = []
  
  if(input.length > 0){
    output.push(input.shift().toUpperCase())
    return output.concat(capitalizeWords(input))
  }else{
    return output
       }
  
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  var output = []
  if(array.length > 0 ){
    var word = array.shift()
    output.push(word[0].toUpperCase() + word.slice(1))
    return output.concat(capitalizeFirst(array))
  }else{
    return output
  }
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;
  for(let key in obj){
    if(obj[key] % 2 === 0){
      sum += obj[key];
    }
    if(typeof obj[key] === 'object'){
      sum +=nestedEvenSum(obj[key]);
    }
  }
  return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  var arr = []
  if(arrays.length > 0){
   for(var i = 0; i < arrays.length; i++){
      if(arrays[i].length > 0){
        arr = arr.concat(flatten(arrays[i]));
      }else if(arrays[i].length !== 0){
        arr.push(arrays[i]);
      }
    }
    
  }
    return arr;
    
     
};
// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  if(!obj){
    obj = {}
  }
  if(str.length === 0){
    return obj
  }else if(!obj.hasOwnProperty(str[0])){
    obj[str[0]] = 1
    return letterTally(str.slice(1), obj)
  
  }else{
    obj[str[0]] = obj[str[0]] + 1
    return letterTally(str.slice(1), obj)
  }
};


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  var count = Array.from(arguments)[1] || 0;
  
  if(count ===  list.length){
    return list
  }else if(list[count] === list[count - 1]){
    list.splice(count, 1)
   return compress(list, count)

  }else{
    return compress(list, ++count)
  }
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var arr =[];
  if(Array.isArray(array[0])){
    for(let i = 0; i < array.length; i++){
      augmentElements(array[i], aug);
      
    }
    
  }else{
    
          array.push(aug);
     
      
    

  }
  return(array)
  
    
  
     
  
  
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var count = Array.from(arguments)[1] || 0;
  
  if(count ===  array.length){
    return array
  }else if(array[count] === array[count - 1] && array[count] === 0){
    array.splice(count, 1)
   return minimizeZeroes(array, count)

  }else{
    return minimizeZeroes(array, ++count)
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var res = [];
  
  if(array[0]){
  if(array[0] > 0){
    res.push(array[0])
  }else{
    res.push(-array[0])
  }
}
  if(array[1]){
   if(array[1] < 0){
    res.push(array[1])
  }else{
    res.push(-array[1])
  }
    
}
  
  if(array[0] && array[1] && array.length > 2){
    return res.concat(alternateSign(array.slice(2)))
  }else{
    return res
  }
  
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var res = '';
  var obj = {1: 'one', 2: 'two', 3: 'three', 4:'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
 
  if(str.length === 1){
    return str[0]
  }else if(obj.hasOwnProperty(str[0])){
    res += obj[str[0]]
    
    return res + numToText(str.slice(1))
  }else{
    res += str[0]
    
    return res + numToText(str.slice(1))
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.

var tagCount = function(tag, node) {
  console.log(node.getElementsByClass)
  if(node2.childNodes){
    for(let i = 0; i < node2.childNodes.length; i++){
      tagCount(tag, node2.childNodes[i]);
    }
  }
  
  if(node.classList.includes(tag)){
    count++;
  }
  return count;
  
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
  var searchArr = array;
  var len = Math.round(searchArr.length / 2);
  min = arguments[2] || 0;
  max = searchArr.length ;
  console.log(searchArr)
  if(searchArr.length >= 2){
    if(searchArr[len] > target){
      searchArr = searchArr.slice(0, len);
      min = min + 0;

    }else{
      searchArr = searchArr.slice(len);
      min += len
    }
    return binarySearch(searchArr, target, min)

  }else{
    return searchArr[0] === target? min: null;
  }

};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
 
  
  
 
};
