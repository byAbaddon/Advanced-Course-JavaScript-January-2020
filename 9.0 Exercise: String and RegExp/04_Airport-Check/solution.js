function solve() {
    let inputString = document.getElementById("string").value;
    let cutInput = inputString.split(",")
 
    let informationText = cutInput[0];
    let informationToPrint = cutInput[1].trim()
 
    let passengerName = / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*( |\.-[A-Z][A-Za-z]* )/
    let matcherPassengerName = informationText.match(passengerName)[0];
    let name = matcherPassengerName.replace(new RegExp(/\-/, "g"), " ").trim();

    let airport = / [A-Z]{3}\/[A-Z]{3} /
    let matcherAirport = informationText.match(airport)[0];
    matcherAirport = matcherAirport.trim().split("/");
    let fromAirport = matcherAirport[0];
    let toAirport = matcherAirport[1];
     
    let flightNumber = / [A-Z]{1,3}[\d]{1,5} /
    let matcherFlightNumber = informationText.match(flightNumber)[0];
    number = matcherFlightNumber.trim();
 
    let company = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /
    let matcherCompany = informationText.match(company)[0];
    airCompany = matcherCompany.replace(new RegExp(/\-/, "g"), " ").trim().split("*").join(" ");
    
    let result = document.getElementById("result")
    let output = "";
    switch (informationToPrint) {
        case "name":
            output = `Mr/Ms, ${name}, have a nice flight!`;
            break;
        case "flight":
            output = `Your flight number ${number} is from ${fromAirport} to ${toAirport}.`;
            break;
        case "company":
            output = `Have a nice flight with ${airCompany}.`;
            break;
        case "all":
            output = `Mr/Ms, ${name}, your flight number ${number} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${airCompany}.`;
            break;
    }
    result.textContent = output;
}







