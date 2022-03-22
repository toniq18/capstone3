//making a call to weatherbit API
let weatherbit = async (newGeoData) => {
    //taking the lat and lng from newGeoData and putting them into accessable variables
    const latitude = newGeoData.lat
    const longitude = newGeoData.lng
    //defining the api key for the URL
    const weatherbitkey = 'd7e4f78d9c044cb988d94e28e859f2f1'
    //concatenating the url to send to the api and putting it into a easier accessable variable to send
    const weatherbitURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${weatherbitkey}`;
    //fetching the data from the api and putting it into a response
    const response = await fetch(weatherbitURL);
    //awating the response from the api and converting the format to json
    const newWeatherbitData = await response.json();
    // returning response
    return newWeatherbitData;
}
// exporting the funciton
  export { weatherbit };



  