//creating a global variable to store data in 
let newGeoData = {};
const weatherbitkey = 'd7e4f78d9c044cb988d94e28e859f2f1'
const weatherbitURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${newGeoData.lat}&lon=${newGeoData.lng}&key=${weatherbitkey}`;



async function handleSubmit(event) {
    event.preventDefault()

    //Getting the city from the user 
    const city = document.getElementById('city').value;
    //Getting the date from the user 
    let date = document.getElementById("date").value;
    // CountDown Timer Credit - https://www.w3schools.com/howto/howto_js_countdown.asp
    let departureinfo = Date.parse(date);
    //getting current time
    let currenttime = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = departureinfo - currenttime;
    // Time calculations for days untill
    let daysUntil = Math.floor(distance / (1000 * 60 * 60 * 24));
    //storing the new data to be accessed later
    newGeoData.daysUntil = daysUntil;
    //makeing sure it shows up in the console
    console.log(newGeoData)

        console.log("::: Form Submitted :::")

            //sending formText (users input into form) over to server side, then awaiting for a response to update the UI
            const returnedData = await ClientSidePost ('http://localhost:8082/api', {url: city})
            console.log(returnedData)
            //storing the data into newGeoData so it can be access for the next api
            newGeoData.name = returnedData.geonames[0].name;
            newGeoData.lat = returnedData.geonames[0].lat;
            newGeoData.lng = returnedData.geonames[0].lng;
            newGeoData.countryCode = returnedData.geonames[0].countryCode;
            console.log(newGeoData)
}



//client side post request for geonames 
const ClientSidePost = async (url ='', data = {})=>{
    console.log(data)
    const response = await fetch (url , {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    console.log(url)
    try{
        const newData = await response.json();
        console.log(newData);
        return(newData);
    } catch (error){
        console.log("Error", error)
    }
};




// exporting the funcitons
 export { handleSubmit }

