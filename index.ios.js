// import some code we need

var React = require('react-native')
var Weekdays = React.createClass({
  render: function(){
    return(

      <view>
      <text>
      Days of the week
      </text>
      </view>
    )
  }

})

AppRegistry.registerComponent('weekdays',function(){
  return Weekdays
})