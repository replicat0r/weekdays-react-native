// import some code we need

var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var DayItem = require ('./src/day-item')


var Weekdays = React.createClass({
  render: function(){
    return(

     <View style={styles.container}>
      <Text>
        Days of the week
      </Text>
      <DayItem day={DAYS[0]}/>
    </View>
  )
  }

})

// Style the react componets

var styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('weekdays',function(){
  return Weekdays
})
