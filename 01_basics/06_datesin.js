let curDate = new Date();
// console.log(curDate.toISOString())
// console.log(curDate.toJSON())
// console.log(curDate.toString())
// console.log(curDate.toLocaleDateString())

let date = new Date(2023,0,12)
console.log(date.getUTCDate());
console.log(date.getMilliseconds());




console.log(curDate.toLocaleDateString('default',{
    weekday : "long"
}))

console.log(`TOdays date is ${curDate.toDateString()
} `)















































