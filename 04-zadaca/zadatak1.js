import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())
var oba = []
var id = uuidv4()

let dodajdatum =() => {
const datum = new Date();
var dd = datum.getDate();

var mm = datum.getMonth()+1; 
var yyyy = datum.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = dd+'/'+mm+'/'+yyyy;
console.log(datum);

}
app.get("/vratiObavijesti", (req, res) => {
    console.log(tempStorage)
    
    res.send(tempStorage)
  })

app.post("/dodajObavijest", (req, res) => {
    var obavjest = {
    id,
    naziv: req.body.naziv,
    sadrzaj: req.body.sadrzaj,
    datum: dodajdatum(),
    
    }
    id++,
    oba.push(obavjest)
    res.send(obavjest)

      
  })

  app.get("/vratiObavijest", (req, res) => {
    
  })


  app.patch("/izmijeniObavijest", (req, res) => {
    
  })

app.listen(port, () => console.log(`Works on port ${port}`))