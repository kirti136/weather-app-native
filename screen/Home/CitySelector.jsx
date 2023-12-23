import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Picker } from "@react-native-picker/picker";

const CitySelector = ({ cities, onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState(null);

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
          onValueChange={(itemValue) => handleCityChange(itemValue)}
        >
          {cities.map((city) => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>
      </View>
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
  },
  text: {
    fontSize: 39,
  },
  pickerContainer: {
    width: 150,
  },
});

export default CitySelector;
