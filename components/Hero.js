import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Hero extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.locationText}>Brooklyn</Text>
        <Text style={styles.weatherText}>Partly Cloudy</Text>
        <Text style={styles.temperatureText}>36 {"\u00b0"}</Text>
      </View>
    );
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
