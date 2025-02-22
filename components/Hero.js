import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ConversionService from "../services/conversion";

class Hero extends React.Component {
  render() {
    const { cityName, todayWeather, isFahrenheit } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.locationText}>{cityName}</Text>
        <Text style={styles.weatherText}>{todayWeather.weather[0].main}</Text>
        <Text style={styles.temperatureText}>
          {this.getTemperature()} {"\u00b0"} {isFahrenheit ? "F" : "C"}
        </Text>
      </View>
    );
  }

  getTemperature() {
    const { todayWeather, isFahrenheit } = this.props;
    const conversion = isFahrenheit
      ? ConversionService.kelvinToF
      : ConversionService.kelvinToC;
    return `${conversion(todayWeather.main.feels_like)}`;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  locationText: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "600"
  },
  weatherText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600"
  },
  temperatureText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600"
  }
});

export default Hero;
