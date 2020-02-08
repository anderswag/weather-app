import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ApiService from "./services/api";

import WeatherList from "./components/WeatherList";

class App extends React.Component {
  state = {
    weatherData: undefined
  };

  render() {
    const { weatherData } = this.state;
    return (
      <View style={styles.container}>
        {weatherData && <WeatherList list={weatherData.list} />}
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
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
