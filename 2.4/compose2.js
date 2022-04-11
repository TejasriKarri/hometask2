/*
Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = (c) => multTwo(addOne(c))

addOneMultTwo(5) // returns 12
Combining functions like this is called function composition.
 */
let compose=(...fns)=>(a)=>fns.reduceRight((y,f)=>f(y),a);