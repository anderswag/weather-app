import getEnvVars from "../environment";
const { apiKey } = getEnvVars();

const fetchData = async zipCode => {
  return {
    city: {
      id: 0,
      name: "Beverly Hills",
      coord: { lon: -118.4065, lat: 34.0901 },
      country: "US",
      population: 0,
      timezone: -28800
    },
    cod: "200",
    message: 38.0996192,
    cnt: 7,
    list: [
      {
        dt: 1581192000,
        sunrise: 1581173135,
        sunset: 1581211806,
        temp: {
          day: 291.92,
          min: 285.27,
          max: 291.92,
          night: 285.27,
          eve: 287.18,
          morn: 291.52
        },
        feels_like: { day: 290.38, night: 283.48, eve: 286.4, morn: 291.88 },
        pressure: 1013,
        humidity: 68,
        weather: [
          { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
        ],
        speed: 3.41,
        deg: 206,
        clouds: 1
      },
      {
        dt: 1581278400,
        sunrise: 1581259482,
        sunset: 1581298264,
        temp: {
          day: 287,
          min: 285.9,
          max: 287.3,
          night: 286.57,
          eve: 286.99,
          morn: 285.9
        },
        feels_like: { day: 282.21, night: 278.67, eve: 282.67, morn: 282.64 },
        pressure: 1009,
        humidity: 64,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" }
        ],
        speed: 5.89,
        deg: 108,
        clouds: 96,
        rain: 2.81
      },
      {
        dt: 1581364800,
        sunrise: 1581345828,
        sunset: 1581384723,
        temp: {
          day: 292.73,
          min: 285.05,
          max: 293.07,
          night: 287.14,
          eve: 288.61,
          morn: 285.05
        },
        feels_like: { day: 283.92, night: 282.86, eve: 283.15, morn: 278.11 },
        pressure: 1013,
        humidity: 17,
        weather: [
          { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
        ],
        speed: 8.69,
        deg: 359,
        clouds: 0
      },
      {
        dt: 1581451200,
        sunrise: 1581432172,
        sunset: 1581471181,
        temp: {
          day: 289.97,
          min: 285.1,
          max: 289.97,
          night: 286.18,
          eve: 287.21,
          morn: 285.1
        },
        feels_like: { day: 285.47, night: 283.59, eve: 283.92, morn: 282.06 },
        pressure: 1020,
        humidity: 31,
        weather: [
          { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
        ],
        speed: 3.51,
        deg: 205,
        clouds: 0
      },
      {
        dt: 1581537600,
        sunrise: 1581518516,
        sunset: 1581557638,
        temp: {
          day: 289.19,
          min: 285.04,
          max: 289.19,
          night: 285.72,
          eve: 286.83,
          morn: 285.04
        },
        feels_like: { day: 284.97, night: 283.92, eve: 283.83, morn: 282.04 },
        pressure: 1018,
        humidity: 40,
        weather: [
          { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
        ],
        speed: 3.74,
        deg: 224,
        clouds: 0
      },
      {
        dt: 1581624000,
        sunrise: 1581604858,
        sunset: 1581644096,
        temp: {
          day: 289.69,
          min: 284.88,
          max: 289.69,
          night: 287.31,
          eve: 288.3,
          morn: 284.88
        },
        feels_like: { day: 286.11, night: 285.54, eve: 285.47, morn: 283.26 },
        pressure: 1015,
        humidity: 44,
        weather: [
          { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
        ],
        speed: 3.29,
        deg: 224,
        clouds: 0
      },
      {
        dt: 1581710400,
        sunrise: 1581691199,
        sunset: 1581730553,
        temp: {
          day: 290.59,
          min: 285.86,
          max: 290.59,
          night: 286.31,
          eve: 288.2,
          morn: 285.86
        },
        feels_like: { day: 287.49, night: 284.85, eve: 285.96, morn: 283.17 },
        pressure: 1014,
        humidity: 52,
        weather: [
          { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
        ],
        speed: 3.58,
        deg: 170,
        clouds: 1
      }
    ]
  };

  // try {
  //   let response = await fetch(
  //     `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipCode}&appid=${apiKey}`
  //   );
  //   let responseJson = await response.json();
  //   console.log(responseJson);
  //   return responseJson;
  // } catch (error) {
  //   console.log(error);
  // }
};

export default { fetchData };
