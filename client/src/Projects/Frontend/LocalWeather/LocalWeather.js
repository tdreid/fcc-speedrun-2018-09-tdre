import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardSubtitle
} from "reactstrap";

import "./LocalWeather.css";
/**
 * Component for looking up the user's location
 * and displaying weather information for that location
 * @class LocalWeather
 * @extends Component
 */
class LocalWeather extends Component {
  /**
   * Creates an instance of LocalWeather.
   * @memberof LocalWeather
   */
  constructor() {
    super();

    this.state = {
      location: null,
      weatherDescription: null,
      tempUnit: "C",
      temp: ""
    };
    this.getLocation();
  }

  /**
   * getLocation
   * Looks up the user's current location
   * in order to find latitude and longitude
   * for use in weather lookup.
   *
   * Response also includes various location
   * data such as city, country etc which are
   * used when rendering user location
   * @memberof LocalWeather
   */
  getLocation = async () => {
    const LOCATION_API = "https://api.ipdata.co";
    const response = await fetch(LOCATION_API);
    const location = await response.json();
    this.setState({
      location
    });
    this.getWeather();
  };

  /**
   * getWeather
   * Uses the latitude and longitude of the current
   * user to retrieve information about weather
   * conditions at that location
   *
   * Data is in celsius to start, saved in both
   * celsius and fahrenheit for easy conversion
   * between the two.
   * @memberof LocalWeather
   */
  getWeather = async () => {
    const LAT = this.state.location.latitude;
    const LON = this.state.location.longitude;
    const WEATHER_API = `https://fcc-weather-api.glitch.me/api/current?lat=${LAT}&lon=${LON}`;
    const response = await fetch(WEATHER_API);
    const weather = await response.json();

    this.setState({
      weatherImage: weather.weather[0].icon,
      weatherDescription: weather.weather[0].description,
      tempUnit: "C",
      tempCelcius: weather.main.temp,
      tempFahrenheit: Math.round(weather.main.temp * 9 / 5 + 32),
      temp: weather.main.temp
    });
  };

  /**
   * switchUnit
   * Flips current view between celsius and
   * fahrenheit
   * @memberof LocalWeather
   */
  switchUnit = () => {
    if (this.state.tempUnit === "C") {
      this.setState({
        tempUnit: "F",
        temp: this.state.tempFahrenheit
      });
    } else {
      this.setState({
        tempUnit: "C",
        temp: this.state.tempCelcius
      });
    }
  };

  /**
   * render
   * @return
   * @memberof LocalWeather
   */
  render() {
    return (
      <div className="LocalWeather">
        <Card>
          <CardBody>
            <CardTitle>Local Weather</CardTitle>
            {this.state.location && (
              <div>
                <img
                  className="LocalWeather_image"
                  src={this.state.weatherImage}
                  alt={this.state.weatherDescription}
                />
                <br />
                <CardSubtitle>
                  {this.state.location.city}, {this.state.location.region}{" "}
                  <br />
                  {this.state.location.country_name}
                </CardSubtitle>

                <CardText>
                  {this.state.temp} {this.state.tempUnit} -{" "}
                  {this.state.weatherDescription}
                </CardText>
              </div>
            )}

            <div className="LocalWeather_buttons">
              <Button color="primary" onClick={this.switchUnit}>
                Switch to{" "}
                {this.state.tempUnit === "C" ? "Fahrenheit" : "Celcius"}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LocalWeather;
