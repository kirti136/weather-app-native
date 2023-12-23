import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const WeatherDisplay = ({ city, temperature, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temperature}>{temperature}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

WeatherDisplay.propTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  city: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
  },
  temperature: {
    fontSize: 35,
    marginBottom: 5,
  },
  description: {
    fontSize: 20,
  },
});

export default WeatherDisplay;
