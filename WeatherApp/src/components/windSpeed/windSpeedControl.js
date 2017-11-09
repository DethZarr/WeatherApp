import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class WindSpeedControl extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			windSpeed: this.props.weatherInfo.wind.speed,
			windDirection: this.props.weatherInfo.wind.deg
		};
	}

	render(){
		return(
			<Card color='blue'>
				<Card.Header style={{backgroundColor:'#1b1c1d', color:'white'}}>
					<center>
						<h4>
							Wind
						</h4>
					</center>
				</Card.Header>
				<Card.Content>
					<section style={{textAlign: 'left'}}>
						<label>
							Speed: {this.state.windSpeed} m/sec
						</label>
						<br/>
						<label>
							Direction: {this.state.windDirection}°
						</label>
						<br/>
					</section>
				</Card.Content>
			</Card>
		)
	}	
}

export default WindSpeedControl;