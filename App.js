import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  Switch,
  View
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ApiService from "./services/api";
import Hero from "./components/Hero";
import WeatherList from "./components/WeatherList";
import ZipCodeInput from "./components/ZipCodeInput";

class App extends React.Component {
  state = {
    weatherData: undefined,
    isFahrenheit: true,
    zipCode: "11201"
  };

  render() {
    return (
      <LinearGradient colors={["#6dd5ed", "#2193b0"]} style={styles.container}>
        {this.renderContent()}
      </LinearGradient>
    );
  }

  renderContent() {
    const { weatherData, isFahrenheit, zipCode } = this.state;
    return (
      <View>
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
        {weatherData && (
          <KeyboardAvoidingView behavior="position">
            <ZipCodeInput
              zipCode={zipCode}
              onInput={text => this.handleInput(text)}
              onSubmit={() => this.handleSearch()}
            />
          </KeyboardAvoidingView>
        )}
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

  handleInput(text) {
    this.setState({
      zipCode: text
    });
  }

  handleSearch() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    ApiService.fetchData(this.state.zipCode).then(data => {
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
    paddingHorizontal: 20
  },
  switch: {
    width: "100%",
    flexDirection: "row"
  },
  switchText: {
    marginLeft: 10,
    fontSize: 24
  }
});

export default App;
