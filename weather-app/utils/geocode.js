import request from 'request'
import chalk from 'chalk'

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=476526981ff5b9046874173c96ec8389&query=' +
    encodeURIComponent(address)

    request({ url: url, json: true}, (error, {body}) => {
        if(error){
            callback(chalk.red.inverse('Unable to connect to location services'), undefined)
        } else if(!body.current){
            console.log(chalk.red.inverse('Unable to find location'))
        } else {
            callback(undefined, {
                latitude: body.location.lat,
                longitude: body.location.lon,
                location: body.location.name + ' of ' + body.location.country
            })
        }
    })

}

export default geocode