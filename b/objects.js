//singleton 
//Object.create 
const a = Symbol("key")
const Jsuser={
    name:"naiem",
    email:"kasdfaj",
    [a]:"new",
    "full name":"naiem shaikh", //now we cannot access this variable using '.' method like Jsuser."full name" 
    age:18
}

// console.log(Jsuser.name)        naiem
// console.log(Jsuser["name"])     naiem

// console.log(Jsuser["full name"])    //now we can access full name

// console.log(Jsuser.a)
// console.log(typeof(Jsuser.a))

// console.log(Jsuser[a])

// Jsuser.email = "naiemshaikh@gamm"
// console.log(Jsuser.email)   //naiemshaikh@gamm
// // Object.freeze(Jsuser) //no value can we chagned in the userconsole.log(Jsuser.email)
// Jsuser.email="asdhfa"       
// console.log(Jsuser.email)// naiemshaikh@gamm   no change caus we used freeze
