const request = require('request')


const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7fd9366b9c0f55f863bbbb499665caaf&query=' + latitude + ','+ longitude + '&units=f'

    request({ url, json : true }, (error,{ body }) => {
        if(error){
            callback('Unable to connect to weather service!')
        } else if(body.error){
            callback('Unable to find location')
        } else{
            const outputString = body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+' degrees out.'
            callback(undefined,outputString)
        }
    })

}

module.exports = forecast