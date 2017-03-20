var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//     return (
//       <div>
//         <h3>It's it {temp} in {location}.</h3>
//       </div>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//   return (
//     <div>
//       <h3>It's it {temp} in {location}.</h3>
//     </div>
//   );
// }

// This is the new feature in ES6. ({temp, location}) === (props) => var {temp, location} = props;

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>It's it {temp} in {location}.</h3>
    </div>
  );
}


// this is removed bcoz props is an argument in WeatherMessage Func
// We are not using React.createClass in second WeatherMessage function bcoz we there is no other
// function rather than render.One thing th note. we have to use React.createClass in Weather.jsx 
// bcoz there are more than one function rather than render.

module.exports = WeatherMessage;
