import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import WeatherDisplay from "./screen/Home/WeatherDisplay";
import CitySelector from "./screen/Home/CitySelector";
import { weatherData } from "./screen/utils/weatherData";

const App = () => {
  const cities = Object.keys(weatherData);
  const [selectedWeather, setSelectedWeather] = useState(null);

  const handleCitySelect = (city) => {
    const weather = weatherData[city];
    if (weather) {
      setSelectedWeather({ city, ...weather });
    }
  };

  return (
    <View style={styles.container}>
      <CitySelector cities={cities} onCitySelect={handleCitySelect} />
      {selectedWeather && (
        <WeatherDisplay
          city={selectedWeather.city}
          temperature={selectedWeather.temperature}
          description={selectedWeather.description}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop:200
  },
});

export default App;
