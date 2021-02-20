function findFactorial(number){
    if (number == 0){
        return 1;
    }
    console.log(number);
    return number * findFactorial(number - 1);
    
}

console.log(`Factorial:`);
console.log(findFactorial(5));

console.log(`Factorial:`);
console.log(findFactorial(2));

console.log(`Factorial:`);
console.log(findFactorial(8));