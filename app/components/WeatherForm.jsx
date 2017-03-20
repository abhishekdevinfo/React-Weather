var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var data = {};
    var countryLocation = this.refs.countryLocation.value;
    var stateLocation = this.refs.stateLocation.value;

    if (countryLocation.length > 0 && stateLocation.length > 0) {
      this.refs.countryLocation.value = '';
      this.refs.stateLocation.value = '';
      data.countryLocation = countryLocation;
      data.stateLocation = stateLocation;
      console.log("======", countryLocation, stateLocation, data);
    }

    this.props.onSearch(data);
    
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="countryLocation" placeholder="Country Name"/>
          <input type="text" ref="stateLocation" placeholder="State Name"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
