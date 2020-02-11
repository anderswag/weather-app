import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Text,
  View
} from "react-native";
import ConversionService from "../services/conversion";

class ZipCodeInput extends React.Component {
  render() {
    const { zipCode } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.onChangeText(text)}
          value={zipCode}
        />
        <TouchableHighlight style={styles.button} onPress={() => this.onSubmit}>
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onChangeText(text) {
    this.props.onInput(text);
  }

  onSubmit() {
    this.props.onSubmit();
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white"
  },
  input: {
    flex: 3,
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  button: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ZipCodeInput;
