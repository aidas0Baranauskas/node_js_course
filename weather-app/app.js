// http://api.weatherstack.com
// 476526981ff5b9046874173c96ec8389
// http://api.weatherstack.com/current/
// http://api.weatherstack.com/current?access_key=476526981ff5b9046874173c96ec8389&query=37.8267,-122.4233
import chalk from 'chalk'
import geocode from './utils/geocode.js'
import forecast from './utils/forecast.js'

const argv = process.argv[2]
if(argv){
geocode(argv, (error, { latitude, longitude, location}) => {
    if(error){
        return console.log(error)
    }

    forecast(longitude, latitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }

        console.log('\n'+chalk.green(location))
        console.log(chalk.green(forecastData.weather + '. Temperature: ' + forecastData.temperature + '. Chance of precipitation: ' + forecastData.precipitation ))
      })
})
}else{
    console.log(chalk.red.inverse('no location provided'))
}