const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/44c065f5752e35196c5e23ff1d755a9e/${latitude},${longitude}`;

  request({ url, json: true }, (error, {body}) => {
    if(error){
      callback('Unable to connect to weather services!', undefined);
    } else if(body.error){
      callback('Unable to find location!', undefined);
    } else {
      callback(undefined, `${body.daily.data[0].summary}. It is currently ${body.currently.temperature} degrees out.The high today is ${body.daily.data[0].temperatureHigh} and the low today is ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% chance of rain.`);
    }
  });
}

module.exports = forecast;
