
/*9. Napiši funkciju koja prima dva objekta, te u slučaju da imaju iste kljućeve
vraća true
Ispis : {a:1,b:2,c:3}, {a:321,b:3,c:1} -> true*/



let check = (obj1, obj2) => {
    let keysSame = true
  
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  
    for (let i = 0; i < Object.keys(obj1).length; i++) {
      if (Object.keys(obj1)[i] !== Object.keys(obj2)[i]) keysSame = false
    }
  
    return keysSame
  }
  
  objekt1 = {
    ime: "Lidija",
    godine: 37,
  }
  
  objekt2 = {
    ime: "Frane",
    godine: 83,
  }
  
  objekt3 = {
    marka: "Ford",
    model: "Focus",
  }
  
  objekt4 = {
    ime: "Mirko",
    godine: 25,
    spol: "M",
  }
  
  console.log(check(objekt1, objekt2)) // true
  console.log(check(objekt1, objekt3)) // false
  console.log(check(objekt1, objekt4)) // false
  console.log(check(objekt2, objekt1)) // true
  console.log(check(objekt2, objekt3)) // false
  console.log(check(objekt2, objekt4)) // false
  console.log(check(objekt3, objekt1)) // false
  console.log(check(objekt3, objekt2)) // false
  console.log(check(objekt3, objekt4)) // false
  console.log(check(objekt4, objekt1)) // false
  console.log(check(objekt4, objekt2)) // false
  console.log(check(objekt4, objekt3)) // false


  
