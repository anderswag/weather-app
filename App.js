import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ApiService from "./services/api";

import Hero from "./components/Hero";
import WeatherList from "./components/WeatherList";

class App extends React.Component {
  state = {
    weatherData: undefined,
    unit: "F"
  };

  render() {
    const { weatherData, unit } = this.state;
    return (
      <View style={styles.container}>
        {weatherData && (
          <Hero
            cityName={weatherData.city.name}
            todayWeather={weatherData.list[0]}
            unit={unit}
          />
        )}
        {weatherData && <WeatherList list={weatherData.list} unit={unit} />}
      </View>
    );
  }

  fetchWeatherData() {
    ApiService.fetchData("90210").then(data => {
      this.setState({
        weatherData: data
      });
    });
  }

  UNSAFE_componentWillMount() {
    this.fetchWeatherData();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center"
  }
});

export default App;
