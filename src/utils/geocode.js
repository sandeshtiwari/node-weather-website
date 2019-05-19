
const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2FuZGVzaHRpd2FyaTk1IiwiYSI6ImNqdnR0eGh1ejNlY3Y0OHBic3docjMwMXIifQ.WgjjMVYMIKfW_ZGRRxTA_w&limit=1`;

  request({ url, json: true }, (error, {body}) => {
    if(error){
        callback('Unable to connect to location services', undefined);
    } else if(body.features.length === 0){
        callback('Unable to find locaiton. Try another location', undefined);
    } else {
        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name
        })
    }
  })
}

  module.exports = geocode;