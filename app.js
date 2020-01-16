const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("please provide an address using command line : ");
} else {
  geocode(address, (error, { lattitude, langitude, location }) => {
    if (error) {
      return console.log("some error in geo code");
    }

    forecast(lattitude, langitude, (error, forecastData) => {
      if (error) {
        return console.log("some error in forecast");
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
