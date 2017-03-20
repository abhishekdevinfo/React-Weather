var React = require('react'),
  WeatherForm = require('WeatherForm'),
  WeatherMessage = require('WeatherMessage'),
  WeatherMap = require('WeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (data) {
    var that = this;
    that.setState({isLoading: true});
    WeatherMap.getTemp(data).then(function (rData) {
      that.setState({
        location: rData.display_location.full,
        temp: rData.temperature_string,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        location: false,
        temp: false,
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
      
    );
  }
});

module.exports = Weather;
