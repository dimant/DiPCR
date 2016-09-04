require("../style/style.scss");

var React = require('react');
var ReactDOM = require('react-dom');

var TemperatureControl = require("./temperature-control");

ReactDOM.render(
  <div className="cycle-component">
    <TemperatureControl
      id={1}
      initialTemp={30}
      initialTime={30}
      onTempChange={function(id, temp) {console.log(temp);}}
      onTimeChange={function(id, time) {console.log(time);}}
      />
  </div>,
  document.getElementById('App')
);
