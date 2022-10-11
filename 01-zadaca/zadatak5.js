
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

  // novi kod

  var numbers = [1, 2, 3, 4, 5, 6, 7];
function djeli_s_3(numeros) {
  var threes = [];
  for(var i = 0; i < numeros.length; i++){
    if(numeros[i]%3 == 0) threes.push(numeros[i]);
  }
  return threes;
}
var ok = djeli_s_3(numbers);
djeli_s_3([1,2,3,4,5,6,7,8,9,10])  // 3, 6, 9