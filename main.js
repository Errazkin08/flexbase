window.onload=()=>{
    const WEB="https://covers.openlibrary.org/b/id/"
    let i =0
let db=[
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "8508261-M.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "8514400-M.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "6764181-M.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "8507716-M.jpg"
    }
  ]
let izenburua=document.querySelector("#iz")
let egilea=document.querySelector("#eg")
let isbn=document.querySelector("#is")
let data= document.querySelector("#da")
let irudia=document.querySelector("#irudi")
let btnAtzera=document.querySelector("#btnatzera")
let btnAurrera=document.querySelector("#btnaurrera")

izenburua.value=db[i].izenburua
egilea.value=db[i].egilea
isbn.value=db[i].isbn
data.value=db[i].data
irudia.src=WEB+db[i].filename
    
btnAtzera.onclick=()=>{
    if(i>0) i--
    else i=db.length-1
  izenburua.value=db[i].izenburua
  egilea.value=db[i].egilea
  isbn.value=db[i].isbn
  data.value=db[i].data
  irudia.src=WEB+db[i].filename
}
btnAurrera.onclick=()=>{
  if(i<db.length-1) i++
  else i=0
izenburua.value=db[i].izenburua
egilea.value=db[i].egilea
isbn.value=db[i].isbn
data.value=db[i].data
irudia.src=WEB+db[i].filename
}
}