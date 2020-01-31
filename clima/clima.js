const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=680602b1d5142ca953cde9474c770360&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}