// for loop tasks
// task 1
// let message = 'I will invest at least 6 hrs every single day for next 60 days!';
// for(let i = 1; i <= 60; i++){
//     console.log(i + '.' + message);
// }

// task 2
// subtask 1 odd numbers 61 to 100
// for(let i = 61; i <= 100; i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }

// subtask 2
// even numbers 78 to 98
// for(let i = 78; i <= 98; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// task 3
// subtask 1 sum of odd numbers 
// let oddSum = 0;
// for(let i = 91; i <=129; i++ ){
//     if(i % 2 !== 0){
//         console.log('odd numbers' + ' : ' + i)
//         oddSum = oddSum + i;
//         console.log('sum of odd numbers after every loop' + ' : ' + oddSum);
//     }
// }
// console.log('total of odd' + ' : ' + oddSum);


// subtask 2 sum of even numbers 
// let evenSum = 0;
// for(let i = 51; i <=85; i++ ){
//     if(i % 2 !== 1){
//         console.log('even number' + ' : ' + i)
//         evenSum = evenSum + i;
//         console.log('sum of even numbers after every loop' + ' : ' + evenSum);
//     }
// }
// console.log('total of even numbers' + ' : ' + evenSum);


// task 4  multiplication table for number 9
// Specify the number for which to generate the multiplication table
// const number = 9;
// // Loop from 1 to 10 to generate the table
// for (let i = 1; i <= 10; i++){
//   // Calculate the product
//   const result = number * i;
//   // Print the multiplication expression and its result to the console
//   console.log(`${number} * ${i} = ${result}`);
// }

// let number = 11;
// for(let i = 1; i <= 10; i++){
//     let result = number * i;
//     console.log(`${number} * ${i} = ${result}`);
// }

//task 5
// count down from 81 to 65
// for(let i = 81; i >= 65; i--){
//     console.log(i);
// }



// while loop tasks
// task 1
// let message = 'I will invest at least 6 hrs every single day for next 60 days!';
// let i = 1;
// while(i <= 60){
//     console.log(`${i}` + '.' + message);
//     i++;
// }


// task 2
// subtask 1 odd numbers 61 to 100
// let oddNumber = 61;
// while(oddNumber <= 100){
//     if(oddNumber % 2 === 1){
//         console.log(oddNumber)
//     }
//     oddNumber++;
// } 

// subtask 2 even numbers from 78 to 98
// let evenNumber = 78;
// while(evenNumber <= 98){
//     if(evenNumber % 2 !== 1){
//         console.log(evenNumber);
//     }
//     evenNumber ++;
// }


// task 3
// subtask 1 sum of odd numbers 
// let oddNumbers = 81;
// let sum = 0;
// while(oddNumbers <= 131){
//     if(oddNumbers % 2 !== 0){
//         sum = sum + oddNumbers;
//     }
//     oddNumbers ++;
// }
// console.log(sum);


// subtask 2 sum of even numbers 
// let i = 206;
// let sum = 0;
// while(i <= 311){
//     if(i % 2 === 0){
//         sum += i;
//     }
//     i ++;
// }
// console.log(sum);

// system 2
// let i = 206;
// let sum = 0;
// while(i <= 311){
//     sum += i;
//     i += 2;
// }
// console.log(sum);


// task 4
// multiplication table for number 5 with while loop
// let n = 1;
// while(n <= 10){
//     let result = n * 5;
//     console.log('5' + ' * ' + n + ' = ' + result);
//     n++;
// }

// system 2
// let n = 1;
// let mult = 5;
// while(n <= 10){
//     let result = n * mult;
//     console.log(mult + ' * ' + n + ' = ' + result);
//     n++;
// }


// task 5
// countdown 21 to 15
// let i = 21;
// let n = 15;
// while(i >= n){
//     console.log(i);
//     i --;
// }


// continue tasks
// task 1: Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
// for(i = 1; i <= 40; i++){
//     if(i % 2 === 1){
//         continue;
//     }
//     console.log(i);
// }

// task 2: display odd number from 55 to 85 and skip the numbers divisible by 5.

// for(i = 55; i <= 85; i++){
//     if(i % 5 === 0){
//         continue;
//     }
//     else if(i % 2 === 0){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }


// system 2
// for(i = 55; i <= 85; i++){
//     if(i % 5 === 0 || i % 2 === 0){
//         continue;
//     }
//     console.log(i);
// }


// break tasks
// task 1 : Write a loop 1 to 200. Use break to exit the loop once you find 100.
// for(i = 1; i <= 200; i++){
//     console.log(i);
//     if(i === 100){
//         break;
//     }
// }


// task 2 : Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
// let i = 1;
// let sum = 0;
// while(true){
//     sum += i;
//     console.log(i);
//     if(sum >= 100){
//         break;
//     }
//     i++;
// }


// task 3 : Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

// for(let i = 1; i <= 100; i++){
//     // check if i is a square number
//     let sqrt = Math.sqrt(i);
//     if(Number.isInteger(sqrt)){  // যদি square root integer হয়, i square number
//         console.log("First square number found:", i);
//         break;      
//     }
// }

let i = 1;
while(i <= 100){
    let sqrt = Math.sqrt(i);
    if(Number.isInteger(sqrt)){
        console.log("First square number found:", i);
        break;
    }
    i++;
}


// console.log();