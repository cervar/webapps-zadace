
/*6. Napiši funkciju kojoj se predaje string, te ona ispisuje bez razmaka svaku
rijec velikim slovom (cammelCase)
Ispis : “web apps vjezbe” -> “webAppsVjezbe”*/


let camelCase = (x) => {
    wordArr = x.split(" ")
    for (let i = 0; i < wordArr.length; i++) {
      if (i === 0) continue
      else {
        wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substring(1)
      }
    }
    return wordArr.join("")
  }
  
  console.log(camelCase("web apps vjezbe")) // webAppsVjezbe