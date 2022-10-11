
/*4. Napiši funkciju koja pretvara broj X u sate i minute
Ispis : 120 -> “Ovo je 2 sata i 0 minuta” */

let convertToHours = (minutes) => {
    let hours = Math.floor(minutes / 60)
    let remainingMinutes = minutes % 60
    return hours + " hrs, " + remainingMinutes + " mins"
  }
  
  console.log(convertToHours(120)) // 2 hrs, 0 mins
  console.log(convertToHours(180)) // 3 hrs, 0 mins
  console.log(convertToHours(44)) // 0 hrs, 44 mins
  console.log(convertToHours(60)) // 1 hrs, 0 mins
  

  // novi kod

  function broj_u_sate(num) { 
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    if (minutes + ''.length < 2) {
      minutes = '0' + minutes; 
    }
    return hours + ":" + minutes;
  }
  
  console.log(broj_u_sate(28));  //0:28
  console.log(broj_u_sate(60));// 1:00
  console.log(broj_u_sate(78));// 1:18
  console.log(broj_u_sate(1562));// 26:2
  console.log(broj_u_sate(15631));// 260:31
