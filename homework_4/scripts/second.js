$(document).ready(function () {
    async function detailsTallinn() {
        let data = await fetch("https://restcountries.eu/rest/v2/capital/tallinn");
        let details = await data.json();
        console.log("Details about Tallinn: ")
        console.log("===================================================");
        console.log("Country name: " + details[0].name);
        console.log("Calling codes: " + details[0].callingCodes);
        console.log("Alt spellings: " + details[0].altSpellings);
        console.log("===================================================");
        
        let myDiv = $("#myDiv");

        let countiesArray = [];
        for (let detail of details) {
            let currencyData = detail.currencies[0].code;
            let currency = await fetch(`https://restcountries.eu/rest/v2/currency/${currencyData}`);
            let finalCurrency = await currency.json();

            console.log("Countries using the same currency:")
            console.log("===================================================");
            for (let names of finalCurrency) {

                countiesArray.push(names.name);
                console.log(names.name);
                myDiv.text(`${names.name}`);
                myDiv.text(`The number of countries using this currency is : ${countiesArray.length}`);

            }
        }


    }

    detailsTallinn()
})