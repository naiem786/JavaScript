//array

const myArr = [0,9,8,7,6,5,4,3,2,1,];
let myHeors = ["naiem","krish"]

// console.log(myArr);
// console.log(myArr[4]);       6
// console.log(myHeors[0]);        naiem

// Array methods

myArr.push(6)
// console.log(myArr)      [
//                             0, 9, 8, 7, 6,
//                             5, 4, 3, 2, 1,
//                             6
// //                         ]
// myArr.pop()
// myArr.pop()
// console.log(myArr)          [
                            //     0, 9, 8, 7, 6,
                            //     5, 4, 3, 2
                            // ]

// myArr.unshift(9)         add value a the start
// console.log(myArr)          [
//                                 9, 0, 9, 8, 7,
//                                 6, 5, 4, 3, 2,
//                                 1, 6
//                             ]

// myArr.shift()               original ([0,9,8,7,6,5,4,3,2,1,]),so starting vaue will be reomved
// console.log(myArr)          [
//                                 9, 8, 7, 6, 5,
//                                 4, 3, 2, 1, 6
//                             ]

// console.log(myArr.includes(5))   does 5 exist in the array and will give answer in boolean like true or flase

// const newArr = myArr.join()    {adds all the element in the array into a string}

// console.log(myArr)              [
//                                     0, 9, 8, 7, 6,
//                                     5, 4, 3, 2, 1,
//                                     6
//                                 ]
// console.log(typeof newArr)      string

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Slice,spice

// console.log("A",myArr);             A [0, 9, 8, 7, 6, 5, 4, 3, 2, 1,6]
// const myn1 = myArr.slice(1,3);      
// console.log(myn1);                  [ 9, 8 ]


// console.log("B",myArr);             B [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 6 ]
// const myn2 = myArr.splice(1,3);
// console.log(myn2)                       //    [ 9, 8, 7 ]
//                         [0,9,8,7,6,5,4,3,2,1,6];
// console.log(myArr)      [ 0, 6, 5, 4, 3, 2, 1, 6 ]

// in splice (1,3) [9,8,7] are removed form the original array on the other hand slice does not remove the numbers from the original array