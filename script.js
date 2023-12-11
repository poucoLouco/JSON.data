fetch("data.json")
.then(function(response){
    return response.headers.json()
})
.then(function(companies){
    let tabledata= document.getElementById("#data")
})