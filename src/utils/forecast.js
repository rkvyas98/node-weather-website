const request = require('request')

const forecast = (longitute, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dba97087d59101d9532bcee966a7a921&query=' +latitude+ ',' +longitute+ '&units=m'

    request({url, json: true}, (error, {body}) => {
        if(error){
                callback('Unable to connect to weather service!', undefined);
        } else if(body.error){
                callback(body.error.info, undefined);
        } else{
                callback(undefined,body.current.weather_descriptions[0] +'. It is currently '+body.current.temperature + ' degress out. It feels like '+ body.current.feelslike + ' degress out.');
        }
    })
}

module.exports = forecast