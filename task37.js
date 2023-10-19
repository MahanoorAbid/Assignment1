"use strict";
function describe_city(city, country = 'default_country') {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
// This will use the default country value
describe_city('London');
