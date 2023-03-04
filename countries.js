
document.getElementById("svg2").onclick = getDetails

const URL = "https://countries.plaul.dk/api/countries/" 
let previousCountryId

function getDetails(evt){
    const target = evt.target
    const id = target.id

    
    document.getElementById(id).style.fill = "blue"
    if(previousCountryId !=null && !(previousCountryId == id)){
    document.getElementById(previousCountryId).style.fill = "rgb(220, 220, 220)"
    }
    previousCountryId = id


    fetch(URL+id)
    .then(res => {
        if(!res.ok){
            document.getElementById("info").style.display = "none"
            return Promise.reject("Country not found")
    }
    return res.json()})
    .then(data=>{
        document.getElementById("info").style.display = "block"
        document.getElementById("flag").setAttribute("src",data.flag)
        document.getElementById("name").innerText = data.name.common
        document.getElementById("un-member").innerText = data.unMember
        let currencyString
        for(cs in data.currencies){
            currencyString = `${cs}, name:${data.currencies[cs].name}, symbol:${data.currencies[cs].symbol}`
        }
        document.getElementById("currencies").innerText = currencyString
        document.getElementById("capital").innerText = data.capital
        document.getElementById("borders").innerText = data.borders.join(",")
    })
    .catch(error => console.log("Country not found"))
}