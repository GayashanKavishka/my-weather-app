const request = require('request');

const openweather = {
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather?q=",
    API_KEY: "2f22493207b1dace8473b2df2aff94ac"
}

const wheatherdata = (address, boy) => {
    const url = 
    openweather.BASE_URL + encodeURIComponent(address) + "&appid=" + openweather.API_KEY;
    console.log(url);
    request({url, json: true}, (error, {body}) => {
        if(error) {
            boy("Unable to connect to weather service", undefined);
        } else if(body.cod === "404") {
            boy("Unable to find location", undefined);
        } else {
            // callback(undefined, {
            //     temperature: body.main.temp,
            //     feelslike: body.main.feels_like
            // });
            boy(body);
            
        }
    });

};



module.exports = wheatherdata;