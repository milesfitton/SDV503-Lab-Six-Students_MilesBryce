//Todo
//Task -1:  
//Create a function that returns the total of all odd numbers up to and including 
//the given arugrment. 
/*The argument will be given as an odd number when you invoke the function. 
Ex:  addOddNumbers(5)  -> 9  // 1 + 3 + 5 = 9
Ex: addOddnumbers(13) -> 49 // 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49*/


// formula = add 1 to ending number eg 5 +1
// formula = divide above number by 2 
//formula = square the above number 
//the formula to determine the sum between 1 and n is 1/2(n + 1))2

function addOddNumbers(n)  {
   let arr=(n+1)/2
return Math.pow (arr,2)
}
console.log(addOddNumbers([5]))//Bryce - This code does not work - is the formula wrong??, Any thoughts?






