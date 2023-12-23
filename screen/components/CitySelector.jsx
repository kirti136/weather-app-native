import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Picker } from "@react-native-picker/picker";

const CitySelector = ({ cities, onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleCityChange = (city) => {
    setSelectedCity(city);
    onCitySelect(city);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select City:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCity}
          style={styles.picker}
          itemStyle={styles.pickerItem}
          onValueChange={(itemValue) => handleCityChange(itemValue)}
        >
          {cities.map((city) => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>
      </View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

CitySelector.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCitySelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    position: "relative",
  },
  text: {
    fontSize: 25,
    position: "absolute",
  },
  pickerContainer: {
    width: 150,
  },
  pickerItem: {
    width: 100,
    height: 100,
  },
});

export default CitySelector;
