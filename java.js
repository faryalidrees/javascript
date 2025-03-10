// arrayQ1: Declare an array named `fruits` and display the third fruit.
// 2. Q2: Define an array of cities and display the first and last city.
// 3. Q3: Declare an array with mixed data types and display each element.
// let fruits =[ 'dargon','pear','peeach','plums','avocado']
// console.log(fruits[2])

// let cities =['karachi','lahore','peshwar','isb','quetta']
// console.log(cities[0],[4])

//     let array =['hello',1,true,false,2,234,]
//     console.log(array)

//     Q1: Declare an empty array and add five student names.
//  Q2: Declare an array of colors. Use `push()` to add two colors at the end of an array
//  Q3: Declare an array with five numbers and add a new number at the end.
//  Q4: Use `pop()` to remove the last element from an array.

// let array=[]
// array.push['hello',1,true,false,2,234 ]
// console.log(array)

// let colors =['red','blue','green','purple']
// colors.push['yellow','pink']
// console.log(colors)

// let num =[9,8,7,6,5]
// num.push[1,2,3,4]
// console.log(num)

// let num1 =['red','blue','green','purple',1,true,false,2,234]
// num1.pop()
// num1.pop()
// console.log(num1)

// // . Q1: Declare an array named `animals ` Use `unshift()` to add an animal at the start of an
// // array.
// // 9. Q2: Use `shift()` to remove the first element of an array.
// // 10. Q3: Copy the first three elements from an array of sports into a new array. [Use slice
// // method]
// // 11. Q4: Use `slice()` to extract and copy the last three elements of an array.hint(use negative
// // index)
// // 12. Q5: Use `splice()` to remove two elements from index 2 in an array.
// // 13. Q6: Use `splice()` to add two cities at index 3 of an array.
// // 14. Q7: Use `slice()` to extract and copy the last three elements of an array.
// // 15. Q8: Use `splice()` to replace two elements in an array.
// // 16. Q9: Remove a subject from an subject array using `splice()` after taking index number
// // from user
// // 17. Q10: Insert 'Laptop' and 'Tablet' at index 2 in an array of gadgets. [Use splice method]

// //removing or inserting element
// // unshift for adding 
// let animals =['rabbit','lion','monkey','YOU']
// animals.unshift ('donkey')
// console.log(animals)

// // shift for removing 

// let arry =[2,3,4,5,6,7,8,9,303,345]
//  arry.shift()
// console.log(arry)

// //slice() method negtive index
// let months =['jan','feb','march','april','may','june','july','agust','sep','oct','nov','dec']
// let index = months.slice(0,-3)
// console.log(index)

// //slice method
// let sports = ['Football', 'Basketball', 'Tennis', 'Cricket', 'Hockey']
// let newsports = sports.slice(0,3)
// console.log(newsports)

// // Use `slice()` to extract and copy the last three elements of an array
// let array =[ 'Basketball', 'Tennis', 'Cricket', 'Hockey ','peshawar','mardam','isb','quetta']
// let newarray =array.slice(0,4)
// console.log(newarray)

 
// //splice method
// let month =['jan','feb','march','april','may','june','july','agust','sep','oct','nov','dec']
// // let arrymonths = month.splice( index,howmany,item1 item2)
//  month.splice(2,2)
// console.log(month)

// // 13. Q6: Use `splice()` to add two cities at index 3 of an array.
// //  add
//  let cities = ['peshawar','mardam','isb','quetta']
// let newcites = cities.splice(3,0,'dehli','mumbai')
// console.log(cities)

// let furits =['apple', 'banana', 'cherry', 'date', 'elderberry']
// furits.splice(2,2,'orange','mango')
// console.log(furits)

// // rempve
// let subject= ['Math', 'Science', 'English', 'History', 'Geography']
// subject.splice(1,2)
// console.log(subject)
//  //add
// let gadgets=['Smartphone', 'Smartwatch', 'Headphones', 'Speakers']
// gadgets.splice(2,0,'laptop','tablte')
// console.log(gadgets)

// //loops

// 18. Q1: Print numbers 1 to 10 using a loop.
for (let i = 1; i <= 10; i++) {
    console.log(i)
    }
// : Display subjects stored in an array using a loop.
let subjects= ['Math', 'Science', 'English', 'History', 'Geography']
for(let i=0; i < subjects.length; i++){
    console.log(subjects [i])}

    //  Q3: Print the multiplication table of 5 using a loop
    for (let i = 0; i <= 10 ;i++){
    console.log(i + "*" + "5" + "=" + i*5 )
}
// Q4: Countdown from 10 to 1 using a loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
    }
// 22. Q5: Take five colors as user input, store them in an array, and display in the console.

    let colors = [];
for (let i = 0; i < 5; i++) {
colors.push(prompt("Enter color " + (i + 1)));
}
console.log(colors);
// 22. Q5: Take five colors as user input, store them in an array, and display in the console.

