/*3. Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000]
Ispis : 53 -> “53 nije unutar [100,150000]” */





function numbers_ranges(x,) {
    if (x >= 100 && x <= 150000) 
        
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbers_ranges(100)); //true
  console.log(numbers_ranges(70)); // false
  console.log(numbers_ranges(69524)); //true
  

// funkcija ako imamo 2 broja x i y 
  function numbers_ranges(x, y) {
    if ((x >= 100 && x <= 150000 && y >= 100 && y <= 150000) 
        || 
        (x >= 100 && x <= 150000 && y >= 100 && y <= 150000))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbers_ranges(99, 8)); // false
  console.log(numbers_ranges(666, 555)); // true
  console.log(numbers_ranges(149999, 5205)); //true