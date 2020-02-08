import getEnvVars from "../environment";
const { apiKey } = getEnvVars();

const fetchData = async zipCode => {
  let mock = {
    city: { id: 0, name: 'Bev Hills"' },
    list: [
      {
        dt: 1581192000,
        sunrise: 1581173135,
        sunset: 1581211806,
        temp: {
          day: 291.24,
          min: 285.27,
          max: 291.24,
          night: 285.27,
          eve: 286.84,
          morn: 290.67
        }
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
