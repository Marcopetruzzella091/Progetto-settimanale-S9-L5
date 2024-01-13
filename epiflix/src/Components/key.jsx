
let key = "harry potter"
let call = `http://www.omdbapi.com/?i=tt3896198&apikey=7460c44f&s=${key.replace(/ /g, "%20")}`
console.log(call)