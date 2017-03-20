var axios = require('axios');

const WEATHER_MAP_URL = 'http://api.wunderground.com/api/91e14f3b0fc356f6/conditions/q';

// 91e14f3b0fc356f6
// http://api.wunderground.com/api/91e14f3b0fc356f6/conditions/q/delhi.json
module.exports = {
  getTemp: function (data) {
    var encodedCountryLocation = encodeURIComponent(data.countryLocation);
    var encodedStateLocation = encodeURIComponent(data.stateLocation);
    var requestUrl = `${WEATHER_MAP_URL}/${encodedCountryLocation}/${encodedStateLocation}.json`;
    console.log("----", requestUrl);
    return axios.get(requestUrl).then(function (res) {
      if (typeof res.data.response.error === 'object') {
        throw new Error(res.data.response.error.description);
      } else {
        return res.data.current_observation;
      }
    }, function (res) {
      throw new Error(res.data.response.error.description);
    });
  }
}

// http://api.wunderground.com/api/91e14f3b0fc356f6/conditions/q/{encodedLocation}.json
