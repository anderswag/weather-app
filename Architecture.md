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

{city: {…}, cod: "200", message: 3.2588757, cnt: 7, list: Array(7)}
city: {id: 0, name: "Beverly Hills", coord: {…}, country: "US", population: 0, …}
cod: "200"
message: 3.2588757
cnt: 7
list: Array(7)
0:
dt: 1581192000
sunrise: 1581173135
sunset: 1581211806
temp: {day: 291.24, min: 285.27, max: 291.24, night: 285.27, eve: 286.84, …}
feels_like: {day: 289.5, night: 283.48, eve: 285.97, morn: 290.78}
pressure: 1013
humidity: 68
weather: [{…}]
speed: 3.41
deg: 206
clouds: 1
**proto**: Object
1: {dt: 1581278400, sunrise: 1581259482, sunset: 1581298264, temp: {…}, feels_like: {…}, …}
2: {dt: 1581364800, sunrise: 1581345828, sunset: 1581384723, temp: {…}, feels_like: {…}, …}
3: {dt: 1581451200, sunrise: 1581432172, sunset: 1581471181, temp: {…}, feels_like: {…}, …}
4: {dt: 1581537600, sunrise: 1581518516, sunset: 1581557638, temp: {…}, feels_like: {…}, …}
5: {dt: 1581624000, sunrise: 1581604858, sunset: 1581644096, temp: {…}, feels_like: {…}, …}
6: {dt: 1581710400, sunrise: 1581691199, sunset: 1581730553, temp: {…}, feels_like: {…}, …}
length: 7
**proto**: Array(0)
**proto**: Object
