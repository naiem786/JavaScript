const marvel_heroes = ["thor" , "ironman" , "spiderman"];
const dc_heros = ["superman" , "flash" ,"batman"]

// marvel_heroes.push(dc_heros)

// console.log(marvel_heroes)          [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  "array can even take other array as a data"
// console.log(marvel_heroes[3][1])        flash

// const allHeros = marvel_heroes.concat(dc_heros)
// console.log(marvel_heroes)                          //  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(allHeros)                                [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]       

// ****push will put the value in same array but concat will store the value in new array that's why we use "allHeros" to store the new value*****'

// const all_new_heros = [...marvel_heroes, ...dc_heros]        it will spread all the elements and then puts them in new array so no arry in array
// console.log(all_new_heros)                  [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_array = [1,2,3 ,[4,5,6] ,7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)     Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);                [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// console.log(Array.isArray("naiem"));    false
// console.log(Array.from("naiem"))    will convert into array  --[ 'n', 'a', 'i', 'e', 'm' ]
// console.log(Array.from({name:"naiem"}))  interesting (will give an empty array caus from doesn't know what to convert )-- []
 
// let score1 =100
// let score2 =200
// let score3 =300
// console.log(Array.of(score1,score2,score3))     [ 100, 200, 300 ]  .of will Returns a new array from a set of elements.

// Read more about these below
// Array.isArray
// Array.from
// Array.of 