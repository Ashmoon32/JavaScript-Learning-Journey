// fetch API

fetch("https://api.covid19api.com/summary")

.then( res => res.json())

.then( data => {
    const global = data.Global;
    const allCountries = data.Countries;
    const myanmar = allCountries.find( c => c.Country === "Myanmar")

    console.log("Global:", global, "Myanmar:", myanmar)
})


async function covidInfo() {
    const response =  await fetch("https://api.covid19api.com/summary")
    const data = await response.json()

    const global = data.Global
    const allCountries = data.Countries
    const myanmar = allCountries.find( c => c.Country === "Myanmar")

    console.log("Global:", global, "Myanmar:", myanmar)
}

covidInfo()