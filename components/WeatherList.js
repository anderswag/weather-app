import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

import ConversionService from "../services/conversion";

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

class WeatherList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({ item, index }) => this.renderListItem(item, index)}
          keyExtractor={item => `${item.dt}`}
        />
      </View>
    );
  }

  renderListItem(item, index) {
    return (
      <View style={styles.item} key={item.dt}>
        <Text>{`${this.getDayOfWeek(item.dt)} ${
          index === 0 ? "(today)" : ""
        }`}</Text>
        <View style={styles.item__right}>
          <Text style={{ width: 70, textAlign: "right" }}>
            {item.weather[0].main}
          </Text>
          <Text style={styles.temp}>
            {this.getConvertedTemperature(item.main.temp_max)}
          </Text>
          <Text style={[styles.temp, { color: "grey" }]}>
            {this.getConvertedTemperature(item.main.temp_min)}
          </Text>
        </View>
      </View>
    );
  }

  getConvertedTemperature(temperature) {
    const { isFahrenheit } = this.props;
    const conversion = isFahrenheit
      ? ConversionService.kelvinToF
      : ConversionService.kelvinToC;
    return conversion(temperature);
  }

  getDayOfWeek(timestamp) {
    let date = new Date();
    date.setTime(timestamp * 1000);
    return `${DAYS_OF_WEEK[date.getDay()]}`;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40
  },
  item__right: {
    color: "black",
    width: "50%",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  temp: {
    textAlign: "right",
    width: 20
  }
});

export default WeatherList;
