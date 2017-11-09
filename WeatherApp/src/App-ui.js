import React, { Component } from 'react';
//Semantic-UI-React Components used
import { Container, Button, Icon, Header, Image, Modal, Grid, Input, Label } from 'semantic-ui-react';

// Helper libraries
import axios from 'axios';
import _ from 'lodash';
import Moment from 'moment';

//Custom Controls
import WeatherLoader from './components/shared/weatherLoader';
import TemperatureControl from './components/temperature/temperatureControl';
import WindSpeedControl from './components/windSpeed/windSpeedControl';
import CityInfoControl from './components/cityInfo/cityInfoControl';

function validateLocation(latitude, longitude) {
	//This will ensure that the params are at least decimals
	const decimalPattern = new RegExp("(\-?(\d*)\.(\d*))$");

	let validLatitude = false;
	let validLongitude = false;

	//Lat & long have a value
	if(latitude && longitude)
	{
		if(decimalPattern.test(latitude))
		{
			if(latitude >= -85.00000 && latitude <= 85.00000)
			{
				validLatitude = true;
			}
		}

		if(decimalPattern.test(longitude))
		{
			if(longitude >= -180.00000 && longitude <= 180.00000)
			{
				validLongitude = true;
			}
		}	
	}
	
	return {validLatitude: validLatitude, validLongitude: validLongitude};
}

class Main extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			weatherInfo: null,
			apiKey: "53f9d8e4213222cf517d86dc406d67fc",
			errorMessage: null,
			modalOpen: true,
			lat: null,
			long: null,
			showLongitudeError: false,
			showLatitudeError: false
		}
		
		this.handleWeatherInfoReset = this.handleWeatherInfoReset.bind(this);
		this.makeWeatherApiCall = this.makeWeatherApiCall.bind(this);
		this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
		this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
		this.validateInputValues = this.validateInputValues.bind(this);
	}

	// Lifecycle method
	componentDidMount() {
		// console.log("Component Has Mounted Successfully");
  	}

  	makeWeatherApiCall()
  	{
  		let self = this;
  		self.setState({modalOpen:false});
		axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${self.state.lat}&lon=${self.state.long}&appid=${self.state.apiKey}&units=metric`)
		.then(res => {
			self.setState({
				weatherInfo: res.data
			});
			console.log(res);
		}).catch(error => {
			self.setState({errorMessage: error.message});
		    console.log(error)
		});	 
  	}

  	handleWeatherInfoReset(){
  		this.setState({
  			weatherInfo: null,
  			modalOpen: true,
  			lat: null,
			long: null,
			showLongitudeError: false,
			showLatitudeError: false
  		});
  	}

  	handleLatitudeChange(event)
  	{
		this.setState({
			lat: event.target.value
		});
  	}

  	handleLongitudeChange(event)
  	{
  		this.setState({
  			long: event.target.value
  		});
  	}

  	validateInputValues(){
  		const lat = this.state.lat;
  		const long = this.state.long;

  		const validatedFields = validateLocation(lat, long);
  		console.log(validatedFields);
  		if(validatedFields.validLatitude && validatedFields.validLongitude)
  		{
  			this.setState({
  				showLatitudeError: false, 
  				showLongitudeError: false
  			})
  			
  			this.makeWeatherApiCall(lat, long);
  		}
  		else
  		{
  			this.setState({
  				showLatitudeError: !(validatedFields.validLatitude), 
  				showLongitudeError: !(validatedFields.validLongitude)
  			});
  		}
  	}

/*
	TODO:
	*Write unit tests
	*Write acceptance tests
	*Write end-to-end tests
	***bundle this shizz
*/

  	renderWeatherInfo()
  	{
  		let weatherInfo = this.state.weatherInfo;
  		let errorMessage = this.state.errorMessage;

  		if(errorMessage)
  		{
  			return(
  				<Container>
  					<Header as="h1">Error:</Header>
  					<p>{errorMessage}</p>
  					<br/>
  				</Container>
  			);
  		}
  		else if(weatherInfo == null)
  		{
  			return(
  				<WeatherLoader />
  			);
  		}
  		else if (weatherInfo)
  		{
  			return(
  				<Grid columns={3} padded>
				    <Grid.Row>
				      	<Grid.Column width={3}>
				      		<div>
				      			<Header as="h1" style={{marginBottom: '0'}}>{_.head(weatherInfo.weather).main}</Header>
				      		</div>
				      		<div>
				      			<label><i>{_.head(weatherInfo.weather).description}</i></label>
				      		</div>
				      		<div>
				      		<br/>
				      			<label>Calculated At:</label>
				      			<br/>
				      			<span>{Moment.unix(weatherInfo.dt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
				      		</div>	
				      	</Grid.Column>
				    </Grid.Row>
				    <Grid.Row>
				    	<Grid.Column>
				        	<CityInfoControl weatherInfo={weatherInfo} />
				      	</Grid.Column>
				    	<Grid.Column>
				        	<TemperatureControl weatherInfo={weatherInfo} />
				      	</Grid.Column>
				    	<Grid.Column>
				    		<WindSpeedControl weatherInfo={weatherInfo} />
				      	</Grid.Column>
				    </Grid.Row>
				    <Grid.Row>
				    	<Grid.Column>
				        	<Button secondary onClick={this.handleWeatherInfoReset}><Icon name='refresh'/> Refresh</Button>
				      	</Grid.Column>
				    </Grid.Row>
				</Grid>
  			);
  		}
  		
  	}

	render() {
		return (
			<div style={{ marginTop: '15px', }}>
				<Modal size="small" open={this.state.modalOpen}>
					<Modal.Header>Submit Location</Modal.Header>
					<Modal.Content image>
						<Image wrapped size='large' src='../public/locationPin.svg' />
						<Modal.Description>
							<Grid columns={12}>
								<Header>Where in the world are you?</Header>
								<p>We would like to give you accurate weather information</p>
								<p>Please enter your GPS coordinates</p>
							    <Grid.Row>
									<Grid.Column width={10}>
										<Input fluid placeholder='Latitude' onChange={this.handleLatitudeChange} />
									</Grid.Column>
									<Grid.Column width={2}>
										{this.state.showLatitudeError &&
											<Label basic color='red' pointing='left'>Invalid Latitude</Label>
										}
									</Grid.Column>
							    </Grid.Row>
							    <Grid.Row>
									<Grid.Column width={10}>
										<Input fluid placeholder='Longitude' onChange={this.handleLongitudeChange} />
									</Grid.Column>
									<Grid.Column width={2}>
										{this.state.showLongitudeError &&
											<Label basic color='red' pointing='left'>Invalid Longitude</Label>
										}
									</Grid.Column>
							    </Grid.Row>
							    <Grid.Row>
							    	<Grid.Column width={10}>
							    		<Button fluid type='submit' secondary onClick={ ()=> this.validateInputValues()}>Submit</Button>
							    	</Grid.Column>
							    </Grid.Row>
							</Grid>
					</Modal.Description>
					</Modal.Content>
				</Modal>
				<Container style={{borderRadius:'10px'}}>
					{ this.renderWeatherInfo() }
				</Container>
			</div>
		);
	}
}

export default Main;