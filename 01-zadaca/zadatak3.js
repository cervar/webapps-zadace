/*3. Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000]
Ispis : 53 -> “53 nije unutar [100,150000]” */


let check = (num) => (num >= 100 && num <= 150000 ? true : false)

console.log(check(100)) // true
console.log(check(69)) // false
console.log(check(149999)) // true
console.log(check(666)) // true
console.log(check(696969)) // false
