import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./WeatherNow.module.css";

class WeatherNow extends Component {
  state = {
    date: "Date",
  };
  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    const time = new Date();
    const options = { month: "long" };

    const date = time.getDate();
    const month = new Intl.DateTimeFormat("en-US", options).format(time);
    const year = time.getFullYear();

    this.setState({ date: date + " " + month + " " + year });
  };

  render() {
    const icon = require(`../../assets/WeatherIcons/${this.props.weatherIcon}.png`);

    return (
      <div className={classes.WeatherNow}>
        <h2>
          {this.props.cityName}, {this.props.countryCode}
        </h2>
        <h4>{this.state.date}</h4>
        <div className={classes.TempratureNow}>
          <img src={icon} alt="alticon" />
          <div
            style={{
              marginTop: "35px",
            }}
          >
            {this.props.celsiusToggle
              ? this.props.temp + "°"
              : (this.props.temp * 1.8 + 32).toFixed(0) + "°F"}

            <p>{this.props.weatherDescription}</p>
          </div>
        </div>
        <div className={classes.WeatherNowTable}>
          <div className={classes.div1}>
            {this.props.celsiusToggle
              ? this.props.feelsLike + "° \n  Feels Likes"
              : (this.props.feelsLike * 1.8 + 32).toFixed(0) +
                "°F  \n  Feels Likes"}
          </div>
          <div className={classes.div2}>
            {this.props.precipitation} cm <br /> Precipitation{" "}
          </div>
          <div className={classes.div3}>
            {this.props.sunrise} <br /> Sunrise time
          </div>
          <div className={classes.div4}>
            {this.props.windSpeed} m/s
            <br />
            Wind speed
          </div>
          <div className={classes.div5}>
            {this.props.humidity} % <br /> humidity
          </div>
          <div className={classes.div6}>
            {this.props.sunset} <br />
            Sunset time
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    weatherIcon: state.weatherIcon,
    temp: state.temp,
    countryCode: state.countryCode,
    cityName: state.cityName,
    weatherDescription: state.weatherDescription,
    feelsLike: state.feelsLike,
    precipitation: state.precipitation,
    sunrise: state.sunrise,
    windSpeed: state.windSpeed,
    humidity: state.humidity,
    sunset: state.sunset,
    celsiusToggle: state.celsius,
    date: state.date,
  };
};

export default connect(mapStateToProps, null)(WeatherNow);
