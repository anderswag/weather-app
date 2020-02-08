const kelvinToF = num => {
  return ((num - 273.15) * 9) / 5 + 32;
};

const kelvinToC = num => {
  return num - 273.15;
};

export default {
  kelvinToC,
  kelvinToF
};
