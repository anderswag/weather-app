import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ApiService from "./services/api";

import WeatherList from "./components/WeatherList";

class App extends React.Component {
  state = {
    weatherData: undefined
  };

  render() {
    return (
      <View style={styles.container}>
        <WeatherList />
      </View>
    );
  }

  fetchWeatherData() {
    ApiService.fetchData("90210");
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
