const axios = require("axios")
require('dotenv').config();

const API_KEY = process.env.API_KEY
const Weather = require("../models/Weather")
exports.renderHomePage = (req, res) => {
    res.render("index")
}

exports.renderAboutPage = (req, res) => {
    res.render("About")
}

exports.getWeather = (req, res) => {
    const city = req.body.city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const weather = new Weather(city)
    weather.validateUserInput()
    if(weather.errors.length){
        res.render("index", {error: weather.errors.toString()})
    } else {
        axios.get(url).then((response) => {
            res.render("index", {weather: `It is currently ${response.data.main.temp} in ${response.data.name}`})
            //console.log(`It is currently ${response.data.main.temp} in ${response.data.name}`)
        }).catch((error) => {
            console.log(error)
        })

    }
    
}