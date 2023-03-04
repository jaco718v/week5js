document.getElementById("btn-get-all").onclick = getAllCars
document.getElementById("btn-get").onclick = getById
document.getElementById("btn-submit").onclick = addCar

//URL = "http://localhost:8080/api/cars"
URL = "http://carsr00.azurewebsites.net/api/cars"

function addCar(evt){
    const brand = document.getElementById("input-brand").value
    const model = document.getElementById("input-model").value
    const price = document.getElementById("input-price").value
    
    fetch(URL, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            brand: brand,
            model: model,
            pricePrDay: price
        })
    }).then(res => res.json())
    .then(data => {
        const returnValue = data.brand + "      " + data.model + "       " + data.pricePrDay
         document.getElementById("submit-return").innerText = returnValue
    })
}


function getById(evt){
    const id = "/" + document.getElementById("text-for-id").value
    fetch(URL+id)
    .then(res => res.json())
    .then(car => makeTableSingle(car))
}

function getAllCars(evt){
    fetch(URL)
    .then(res => res.json())
    .then(cars => makeTable(cars)
    )
}

function makeTableSingle(car){
    const tableRow = (`
        <tr>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.pricePrDay}</td>
        </tr> `)
    document.getElementById("found-car").innerHTML = tableRow
}

function makeTable(cars){
    const tableRows =cars.map(car => `
        <tr>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.pricePrDay}</td>
        </tr>
        
        `)
    const tableRowAsString = tableRows.join("")
    document.getElementById("tbody").innerHTML = tableRowAsString
}