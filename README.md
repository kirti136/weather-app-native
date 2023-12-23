
# Weather Application

Weather Application built to understand basics of React Native introduces city selection, fetching weather data, and rendering UI elements for practical learning.
[Short Demo Video](https://drive.google.com/file/d/1Enerqtij1bgkM1a4NmMR8Km2thOXkJ2q/view?usp=sharing)
---------------------------------------------------------------------------------------------------------------------------------------------------------------
#### Video Walkthrough of the project

 - [Attach a brief video walkthrough of Weather application]()
---------------------------------------------------------------------------------------------------------------------------------------------------------------

## Brief Explaination :-
    

**1. App Component:**

**Responsibility:** 
Acts as the main component that integrates WeatherDisplay and CitySelector.

**State:**
- **selectedWeather:** Holds the weather information for the currently selected city.
**Behavior:**
- Imports WeatherDisplay, CitySelector, and the weatherData object (mock weather information).
- Initializes the cities array by extracting city names from the weatherData object keys.
- Provides the handleCitySelect function, which updates the selectedWeather state based on the selected city.
- Passes necessary props to CitySelector and WeatherDisplay, including the list of cities and weather information for the default city (first city in the list).

    ---------------------------------------------------------------------------------------------------------------------------------------------------------------

**2. CitySelector Component:**

**Responsibility:** 
Allows the user to select a city from a predefined list.

**Props:**
- **cities:** An array containing the names of available cities.
- **onCitySelect:** A callback function to handle city selection.

**Behavior:**
- Renders a Picker component to display a dropdown of available cities.
- When the user selects a city, it triggers the handleCityChange function, updating the selected city state and invoking the onCitySelect callback with the selected city.


    ---------------------------------------------------------------------------------------------------------------------------------------------------------------
**3. WeatherDisplay Component:**

**Responsibility:** 
Display weather information for the selected city.

**Props:**
- **city:** Name of the city for which weather information is displayed.
- **temperature:** Temperature of the selected city.
- **description:** Description of the weather in the selected city.(eg. cloudy, sunny, rainy, foggy, etc.)


**Behavior:**
- Uses React Native's Text component to display city name, temperature, and weather description.

    ---------------------------------------------------------------------------------------------------------------------------------------------------------------
**3. weatherData.js :** 

**Responsibility:** 
To store mock weather data.

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

