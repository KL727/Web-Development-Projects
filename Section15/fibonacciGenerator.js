//exercise For Loop

function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    if (n === 0) return []; 
    if (n === 1) return [0];

    let fibArr =[0,1]; // Initialize the first two terms of the Fibonacci sequence

    // Generate the rest of the Fibonacci sequence up to n terms
    for(let i = 2; i<n; i++){
        let next = fibArr[i - 1] + fibArr[i - 2]; // f(n) = f(n-1) + f(n-2)

        // Add the calculated number to the array
        fibArr.push(next);
    }
    
    //Return an array of fibonacci numbers starting from 0.
    return fibArr;
//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(9));  //n=9