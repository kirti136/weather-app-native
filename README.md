
# Weather Application

Weather Application built to understand basics of React Native introduces city selection, fetching weather data, and rendering UI elements for practical learning.
[Short Demo Video](https://drive.google.com/file/d/1Enerqtij1bgkM1a4NmMR8Km2thOXkJ2q/view?usp=sharing)

#### Video Walkthrough of the project

 - [Attach a brief video walkthrough of Weather application]()


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


## Follow-up Questions :-

#### 1. How did you implement the city selection functionality in the CitySelector component?
- In the CitySelector component, I used Picker component provided by React Native to create a drop down list of all the cities present in the data. 
- The Picker component was then populated with city names from the cities prop array(Passed through parent component). 
- On selection of a city from the dropdown, the onValueChange event was used to trigger the handleCityChange function, updating the selected city state.

#### 2. Did you encounter any challenges while integrating the Picker component for city selection?
- It was straightforward to create the Picker component. 
- However, managing the state update within the App.js component posed a bit of a challenge. 
- Additionally, I attempted to apply CSS to the picker item, but later realized that I was using a deprecated package. 
- After installing the correct version of that package, I was able to work with it properly.

#### 3. What styling did you apply using StyleSheet.create to format the displayed weather data?
- I applied basic styling using StyleSheet.create to format the displayed weather data. 
- Specifically, I used styles for Text components to control the font size, color, and alignment for displaying the city name, temperature, and weather description and background color for the main container.

#### 4. Were there any specific considerations while displaying the weather description for the selected city?
- Yes, The weather descriptions were displayed using a Text component, presenting a description (eg. sunny, cloudy, etc.) obtained from the description prop.

#### 5. How did you manage state changes when a new city is selected?
- State changes when a new city is selected.
- It was managed via the handleCitySelect function within the App component. 
- This function updated the selectedWeather state with the weather information for the newly selected city obtained from the weatherData object.

#### 6. Could you elaborate on how the App component communicates with the CitySelector and WeatherDisplay components?
- The App component rendered the CitySelector and WeatherDisplay components. 
- It passed down necessary props to CitySelector:
    
    a. CitySelector: cities array and the handleCitySelect function.

    b. WeatherDisplay: weather information for the initially selected city.

#### 7. What approach did you take to handle asynchronous data fetching for weather information?
- In this project, the weatherData object was mocked to simulate weather information. 
- For a real-world scenario involving API calls for weather data, I would utilize asynchronous functions such as fetch or Axios to fetch data and update the state accordingly.

#### 8. How did you structure the code for better readability and maintainability within the project?
- I have structured the code by separating components into individual files (WeatherDisplay, CitySelector) for better organization. 
- Meaningful variable names were used to enhance readability and maintainability.

