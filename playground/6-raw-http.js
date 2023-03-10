import http from 'http'
const url = 'http://api.weatherstack.com/current?access_key=476526981ff5b9046874173c96ec8389&query=45,-75'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })
    
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error: ', error)
})


request.end()
