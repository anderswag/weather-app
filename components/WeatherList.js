import React from "react";
import { StyleSheet, Text, View } from "react-native";

class WeatherList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>Sunday (today)</Text>
          <View style={styles.item__right}>
            <Text>Cloudy</Text>
            <Text>43</Text>
            <Text>33</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 20,
    backgroundColor: "pink"
  },
  item__right: {
    width: "50%",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "red"
  }
});

export default WeatherList;
