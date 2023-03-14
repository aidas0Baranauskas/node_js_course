import request from 'request'

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=476526981ff5b9046874173c96ec8389&query=' +
    latitude + ',' + longitude

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        } else if (!body.current) {
            console.log('forecast else if error')
            callback('Unable to find location')
        } else {
            callback(undefined, 'weather: ' + body.current.weather_descriptions[0] + '. Temperature: ' + body.current.temperature + ' C' + '. Precipitation: ' + body.current.precip + '%')
        }
    })
}

export default forecast