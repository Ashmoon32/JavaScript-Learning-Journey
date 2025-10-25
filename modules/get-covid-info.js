const fs = require("fs");
const https = require("https");

https.get("https://disease.sh/v3/covid-19/countries", res => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    })

    res.on('end', () => {
        fs.writeFile('covid-info.json', data, () => {
            console.log("Save to file: Completed")
        })
    })
})