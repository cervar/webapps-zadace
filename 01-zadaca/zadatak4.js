
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
  