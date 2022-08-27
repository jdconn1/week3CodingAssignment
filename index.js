// 1.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

function subtract(input) {
    let a = ages[ages.length - 1];
    let b = ages[0];
    input = a-b;
    return input;
}

console.log(subtract(ages));

ages.push(73);

console.log(subtract(ages));

var average1 = ages.reduce((total, current) => total + current) / ages.length;

console.log(average1);

function average(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(average(ages));

// 2.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var length = names.map(element => element.length);

console.log(average(length));

for (var i = 0; i < names.length; i++) {
    console.log(names.join(' '));
}

// 3. To access the last element in an array you use array.length -1.
// 4. To access the first element in an array you call the array like so array[0]. Since the array is in
// the 0 base the first element will always be 0.

// 5.

var nameLengths = []

var length2 = names.map(element => element.length);

length2.forEach(element=> nameLengths.push(element));

console.log(nameLengths);

// for (i = 0; i < names.length; i++) {'
//      nameLength.push(name[i].length);
// }

// 6.

let sum = 0;
for ( let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log(sum);

// 7.

function returnWordXTimes(word, number) {
    var result = '';
    for (let i = 0; i < number; i++) {
        result += word;
    } return result;
}

console.log(returnWordXTimes(`"Wow" 
   - Owen Wilson.

 `, 10));

// 8.


let fullName = (firstName, lastName) => `${firstName} ${lastName}`; 

console.log(fullName("Jason", "Bourne"));

// 9.

function sumFunction(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return true == sum > 100;
}

console.log(sumFunction(ages));

// 10.

let array = [1, 2, 3, 56, 5, 70];

function average2(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    result = sum / array.length;
    return result.toFixed(2);
}

console.log(average2(array));

// I really just wanted to see if I could get the .toFixed to work with this function.

// 11.

let array1 = [1, 2, 3, 56, 5, 70];
let array2 = [7, 8, 9, 19, 11, 22];

function twoArrayAverage(array1, array2) {
    let sum1 = 0;
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    } sum1 / array1.length;
    let sum2 = 0;
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    } sum2 / array2.length;
    return true == sum1 > sum2;
}

console.log(twoArrayAverage(array1, array2));

// 12.

function willBuyDrink(isHotOutSide, moneyInPocket) {
    if (isHotOutSide == true && moneyInPocket > 10.5) {
        return true;
    } 
    return false;
}

console.log(willBuyDrink(true, 11));
console.log(willBuyDrink(false,23));
console.log(willBuyDrink(true, 2));

/** I wasn't sure if the boolean value this problem refers to was
 * meant to pass in a a argument or not. I passed in the value as 
 * an argument and it seems to work.
*/

// 13.

/** This function takes two numbers as parameters and does a simple 
 * mathematical operation. I use 0 and 4 because I knew the result is 
 * 2. However, this function can take in any two numbers and perform 
 * the specified operation. I want to make this function as simple as
 * possible and look as neat as possible.
 */

const addition = (num1, num2) => (num1 + num2) / Math.sqrt(num2);

console.log(addition(0, 4));
