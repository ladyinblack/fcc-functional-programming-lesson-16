// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem</h1>`;

/** TODO:
 * Complete the code for the squaresList function using any combination of map(), filter(), and reduce().  The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.  An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].
 * NOTE: Your function should not use any kind of for or while loops or the forEach() function.
 * 
 const squareList = arr => {
   // Only change code below this line 
   return arr;
   // Only change code above this line
 };
 
 const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
 console.log(squaredIntegers);
 */

const squareList = (arr) => {
  // Only change code below this line
  // let filteredArr = arr.filter((a) => a > 0 && a % 1 === 0);
  // console.log(filteredArr);
  // console.log(filteredArr.map((arrEl) => arrEl * arrEl));
  return (arr = arr.filter((a) => a > 0 && a % 1 === 0).map((a) => a * a));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));
