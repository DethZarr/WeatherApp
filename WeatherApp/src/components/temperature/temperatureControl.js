import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class TemperatureControl extends Component
{
	constructor(props){
		super(props);
		this.state = { 
			highTemp: this.props.weatherInfo.main.temp_max, 
			lowTemp: this.props.weatherInfo.main.temp_min,
			temp: this.props.weatherInfo.main.temp
		};
	};

	render(){
		return(
			<Card color='red'>
				<Card.Header style={{backgroundColor:'#1b1c1d', color:'white'}}>
					<center>
						<h4>
							Temp
						</h4>
					</center>
				</Card.Header>
				<Card.Content>
					<section style={{textAlign: 'left'}}>
						<label>
							High: {this.state.highTemp}°c
						</label>
						<br/>
						<label>
							Low: {this.state.lowTemp}°c
						</label>
						<br/>
						<label>
							Current: {this.state.temp}°c
						</label>
					</section>
				</Card.Content>
			</Card>
		)
	}	
}

export default TemperatureControl;