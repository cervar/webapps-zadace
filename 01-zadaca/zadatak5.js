
/*5. Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve
djeljive s 3
Ispis : [1,2,3,4,5,6,7,8,9,10] -> “Brojevi djeljivi s 3: 3,6,9” */


let djels3 = (list) => {
    let result = []
    for (let el of list) {
      if (el % 3 === 0) result.push(el)
    }
    for (let el of result) {
      console.log(el)
    }
  }
  
  djels3([1, 2, 3, 4, 5, 6, 7, 8, 9]) // 3, 6, 9