var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

function getPointerEvent(e) {
  return e.originalEvent.targetTouches?
    e.originalEvent.targetTouches[0] : event;
};

module.exports = React.createClass({
  getInitialState: function() {
    var initialTemp = this.props.initialTemp ? this.props.initialTemp : 50;
    var initialTime = this.props.initialTime ? this.props.initialTime : 50;
    
    return { 
      time: initialTime,
      timeInput: initialTime,
      isTimeValid: true,
      temperature: initialTemp,
      temperatureInput: initialTemp,
      isTempValid: true,
    };
  },
  handlePointerDown: function(e) {
    $(document).on("touchmove mousemove", 
                   this.handlePointerMove);
    $(document).on("touchend mouseup", 
                  this.handlePointerUp);
  },
  handlePointerUp: function(e) {
    $(document).unbind("touchend mouseup",
                      this.handlePointerUp);
    $(document).unbind("touchmove mousemove",
                      this.handlePointerMove);
  },
  handlePointerMove: function(e) {
    e.preventDefault();
    var pointer = getPointerEvent(e);
    var main = $(".tempbar-background");
    var percentage = 
        Math.round(100 - 
                   (pointer.pageY / main.outerHeight()) 
                   * 100);

    if(percentage >= 0 && percentage <= 100) {
      this.setState({
        temperature: percentage,
        temperatureInput: percentage
      });
    }
  },
  handleTempInputChange: function(e) {
    if(this.state.isInputValid) {
      var input = parseInt(e.target.value);
      this.setState({temperature: input});
    }
  },
  validateTempInput: function(e) {
    var i = parseInt(e.target.value);
    var isInRange = (i >= 0 && i <= 100);
    
    this.setState({isTempValid: isInRange});
    this.setState({temperatureInput: e.target.value});
  },
  handleTimeInputChange: function(e) {
    
  },
  validateTimeInput: function(e) {
    
  },
  render: function() {
    return (
      <div className="tempbar-component">
        <div className="tempbar-background"
          onMouseDown={this.handlePointerDown}
          onTouchStart={this.handlePointerDown}>
          <div className="tempbar-temperature"
            style={{height: this.state.temperature+"%"}}>
            <div className="tempbar-drag" />
          </div>
        </div>
        <div className="tempbar-input-container">
          Temperature
          <input 
            type="number"
            className={this.state.isTempValid ? 
              "tempbar-input" : "tempbar-input input-invalid"}
            value={this.state.temperatureInput}
            onBlur={this.handleTempInputChange}
            onChange={this.validateTempInput}/>C
        </div>
        <div className="tempbar-input-container">
          Time
          <input 
            type="number" 
            className="tempbar-input"/>
          Sec
        </div>
      </div>
    );
  }
});
