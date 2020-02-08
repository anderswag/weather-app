import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Hero extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Brooklyn</Text>
        <Text>Partly Cloudy</Text>
        <Text>36 {"\u00b0"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    backgroundColor: "pink"
  }
});

export default Hero;
