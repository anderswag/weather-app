const kelvinToF = num => {
  return Math.ceil(((num - 273.15) * 9) / 5 + 32);
};

const kelvinToC = num => {
  return Math.ceil(num - 273.15);
};

export default {
  kelvinToC,
  kelvinToF
};
