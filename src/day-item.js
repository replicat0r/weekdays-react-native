//Import code
var React = require('react-native')
var Text = React.Text
var StyleSheet = React.StyleSheet
//create

var DayItem = React.createClass({

	style:function(){
		return {
			color: this.color(),
			fontWeight: this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		}
	},
	color:function(){
		var opacity = 1/(this.props.daysUntil+0.1);
		return 'rgba(0,0,0,'+ opacity +')';
	},
	fontWeight:function(){
		var weight = 7 - this.props.daysUntil;
		return (weight * 100).toString();
	},
	fontSize:function(){
		return 60 - 6 * this.props.daysUntil;
	},
	lineHeight:function(){
		return 70 - 7 * this.props.daysUntil;
	},
	render:function(){
		return <Text style={this.style()}>
			{this.props.day}
		</Text>

	}
})
//style

//make this code available
module.exports = DayItem;
