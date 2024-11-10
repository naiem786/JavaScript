// const a=800.41
// const c=100000000
const b =new Number(400)
// console.log(b.toString().length)--3
// console.log(b.toFixed(2))--400.00
// console.log(a.toPrecision(5))--800.41
// console.log(c.toLocaleString('en-IN')) --10,00,00,000


// const otherNumber = 23.89439843
// console.log(otherNumber.toPrecision(20))--23.894398429999998967

//++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++//
// console.log(Math);
// console.log(Math.abs(-42));--42
// console.log(Math.round(4.92323451246))--5
// console.log(Math.ceil(4.2));--5  will only take upper value
// console.log(Math.floor(4.9));--4 will only take lower value
// console.log(Math.min(3,4,65,87,9,46,3,23,)) --3
// console.log(Math.max(3,4,65,87,9,46,3,23,)) --87

// const z=Math.random()*10+1--7.961864865091565generates a random number
// console.log(z.toPrecision(1))

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min +1))+min)  