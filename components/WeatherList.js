import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    return <View style={styles.container}>{this.renderList()}</View>;
  }

  renderList() {
    const { list } = this.props;
    return list.map((item, index) => {
      return (
        <View style={styles.item} key={item.dt}>
          <Text>{`${this.getDayOfWeek(item.dt)} ${
            index === 0 ? "(today)" : ""
          }`}</Text>
          <View style={styles.item__right}>
            <Text style={{ width: 70 }}>{item.weather[0].main}</Text>
            <Text style={{ width: 20 }}>
              {this.getConvertedTemperature(item.temp.max)}
            </Text>
            <Text style={{ width: 20 }}>
              {this.getConvertedTemperature(item.temp.min)}
            </Text>
          </View>
        </View>
      );
    });
  }

  getConvertedTemperature(temperature) {
    return Math.ceil(ConversionService.kelvinToC(temperature));
  }

  getDayOfWeek(timestamp) {
    let date = new Date();
    date.setTime(timestamp * 1000);
    return `${DAYS_OF_WEEK[date.getDay()]}`;
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
    height: 40
    // backgroundColor: "pink"
  },
  item__right: {
    width: "50%",
    justifyContent: "space-around",
    flexDirection: "row"
    // backgroundColor: "red"
  }
});

export default WeatherList;
