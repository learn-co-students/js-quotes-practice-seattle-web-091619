// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 

let QUOTE_URL = "http://localhost:3000/quotes"
document.addEventListener("DOMContentLoaded", (event) => {

    let boxxer = document.getElementById("quote-list")

    fetch(QUOTE_URL)
    .then(res => {
        return res.json()
    })
    .then(json => {
        methodOnData(json)
    })


    function methodOnData(json){
    boxxer.textContent = json[0].quote

}
    
    




})