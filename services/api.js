import getEnvVars from "../environment";
const { apiKey } = getEnvVars();

const fetchData = async zipCode => {
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
