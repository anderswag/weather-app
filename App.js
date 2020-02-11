import React from "react";
import { StyleSheet, Text, Switch, View } from "react-native";
import ApiService from "./services/api";

import Hero from "./components/Hero";
import WeatherList from "./components/WeatherList";

class App extends React.Component {
  state = {
    weatherData: undefined,
    isFahrenheit: true
  };

  render() {
    const { weatherData, isFahrenheit } = this.state;
    return (
      <View style={styles.container}>
        {weatherData && (
          <Hero
            cityName={weatherData.city.name}
            todayWeather={weatherData.list[0]}
            isFahrenheit={isFahrenheit}
          />
        )}
        {weatherData && (
          <WeatherList list={weatherData.list} isFahrenheit={isFahrenheit} />
        )}
        {this.renderSwitch()}
      </View>
    );
  }

  renderSwitch() {
    return (
      <View style={styles.switch}>
        <Switch
          value={this.state.isFahrenheit}
          onValueChange={switchValue =>
            this.setState({ isFahrenheit: switchValue })
          }
        />
        <Text style={styles.switchText}>
          {this.state.isFahrenheit ? "F" : "C"}
        </Text>
      </View>
    );
  }

  handleSwitchUnit() {
    const { isFahrenheit } = this.props;
    this.setState({
      unit: !isFahrenheit
    });
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
  },
  switch: {
    flex: 1,
    width: "100%",
    flexDirection: "row"
  },
  switchText: {
    marginLeft: 10,
    fontSize: 24
  }
});

export default App;
