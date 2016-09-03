require("../style/style.scss");

var React = require('react');
var ReactDOM = require('react-dom');

var TemperatureControl = require("./temperature-control");

ReactDOM.render(
  <div className="cycle-component">
    <TemperatureControl
      id={1}
      initialTemp={25}
      initialTime={30}
      onCycleChange={function(c) {console.log(c);}}/>
  </div>,
  document.getElementById('App')
);
