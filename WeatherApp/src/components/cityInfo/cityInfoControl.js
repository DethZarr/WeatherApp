import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class CityInfoControl extends Component
{
	constructor(props){
		super(props);
		this.state = { 
			cityName: this.props.weatherInfo.name, 
			countryCode: this.props.weatherInfo.sys.country, 
		};
	};

	render(){
		return(
			<Card color='green'>
				<Card.Header style={{backgroundColor:'#1b1c1d', color:'white'}}>
					<center>
						<h4>
							City Info
						</h4>
					</center>
				</Card.Header>
				<Card.Content>
					<section style={{textAlign: 'left'}}>
						<label>
							Name: {this.state.cityName}
						</label>
						<br/>
						<label>
							Country Code: {this.state.countryCode}
						</label>
					</section>
				</Card.Content>
			</Card>
		)
	}	
}

export default CityInfoControl;