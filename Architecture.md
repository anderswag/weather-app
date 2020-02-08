Core features

- Shows list of weather for next week
- Shows weather for current ZipCode
- Can input zipcode to update weather
- Toggle button to toggle between Celcius and Farenheit
- Every minute it fetches new data

Important Data points

- Current Location
- Current WEather
- Sunset / Sunrise

Components

<Hero weatherData={this.weatherData}>
  <Text>Brooklyn</Text>
  <Text>Partly Cloudy</Text>
  <Text>36F</Text>
</Hero>

<Info>
  <Text>Sunrise / Sunset</Text>
</Info>

<WeatherList>
  <WeatherListItem/>
  <WeatherListItem/>
  <WeatherListItem/>
  <WeatherListItem/>
  <WeatherListItem/>
</WeatherList>

<WeatherListItem>
  <Text>Sunday</Text>
  <Text>Cloudy</Text>
  <Text>High: 33</Text>
  <Text>Low: 20</Text>
</WeatherListItem>

<ToggleBar/>

<ZipcodeInput/>
