## ALTERNATE SOLUTIONS

### Solution 1
```js
const squareList = (arr) => {
    // Only change code below this line 
    return arr
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => Math.pow(num, 2));
    // Only change code above this line 
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

### Code Explanation
Uses the operator `filter()` and `map()` functions to square all positive integers in a given array.


### Solution 2
```js
const squareList = arr => {
    return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0 ? sqrIntegers.concat(num * num) : sqrIntegers;
    }, []);
};
```

### Code Explanation
This does basically the same but uses the `isInteger()` method to check the numbers.


### REFERENCE LINKS
- [`Array.prototype.map()` - MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [`Array.prototype.filter()` - MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [`Array.prototype.reduce()` - MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [`Number.isInteger()` - MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
- [`Math.pow()` - MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)

