import getEnvVars from "../environment";
const { apiKey } = getEnvVars();

const fetchData = async zipCode => {
  return {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1581282000,
        main: {
          temp: 271.93,
          feels_like: 265.37,
          temp_min: 271.31,
          temp_max: 271.93,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 995,
          humidity: 90,
          temp_kf: 0.62
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
        ],
        clouds: { all: 76 },
        wind: { speed: 6.02, deg: 239 },
        sys: { pod: "n" },
        dt_txt: "2020-02-09 21:00:00"
      },
      {
        dt: 1581292800,
        main: {
          temp: 271.92,
          feels_like: 265,
          temp_min: 271.45,
          temp_max: 271.92,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 994,
          humidity: 90,
          temp_kf: 0.47
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
        ],
        clouds: { all: 82 },
        wind: { speed: 6.54, deg: 231 },
        sys: { pod: "n" },
        dt_txt: "2020-02-10 00:00:00"
      },
      {
        dt: 1581303600,
        main: {
          temp: 271.2,
          feels_like: 263.68,
          temp_min: 270.89,
          temp_max: 271.2,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 990,
          humidity: 89,
          temp_kf: 0.31
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
        ],
        clouds: { all: 83 },
        wind: { speed: 7.25, deg: 223 },
        sys: { pod: "n" },
        dt_txt: "2020-02-10 03:00:00"
      },
      {
        dt: 1581314400,
        main: {
          temp: 270.36,
          feels_like: 262.66,
          temp_min: 270.2,
          temp_max: 270.36,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 989,
          humidity: 87,
          temp_kf: 0.16
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d"
          }
        ],
        clouds: { all: 47 },
        wind: { speed: 7.32, deg: 218 },
        sys: { pod: "d" },
        dt_txt: "2020-02-10 06:00:00"
      },
      {
        dt: 1581325200,
        main: {
          temp: 272.4,
          feels_like: 264.22,
          temp_min: 272.4,
          temp_max: 272.4,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 985,
          humidity: 82,
          temp_kf: 0
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
        ],
        clouds: { all: 0 },
        wind: { speed: 8.21, deg: 209 },
        sys: { pod: "d" },
        dt_txt: "2020-02-10 09:00:00"
      },
      {
        dt: 1581336000,
        main: {
          temp: 272.89,
          feels_like: 264.6,
          temp_min: 272.89,
          temp_max: 272.89,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 982,
          humidity: 79,
          temp_kf: 0
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
        ],
        clouds: { all: 0 },
        wind: { speed: 8.36, deg: 199 },
        sys: { pod: "d" },
        dt_txt: "2020-02-10 12:00:00"
      },
      {
        dt: 1581346800,
        main: {
          temp: 270.97,
          feels_like: 262.3,
          temp_min: 270.97,
          temp_max: 270.97,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 980,
          humidity: 81,
          temp_kf: 0
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
        ],
        clouds: { all: 0 },
        wind: { speed: 8.66, deg: 197 },
        sys: { pod: "n" },
        dt_txt: "2020-02-10 15:00:00"
      },
      {
        dt: 1581357600,
        main: {
          temp: 271.51,
          feels_like: 262.53,
          temp_min: 271.51,
          temp_max: 271.51,
          pressure: 999,
          sea_level: 999,
          grnd_level: 978,
          humidity: 86,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n"
          }
        ],
        clouds: { all: 32 },
        wind: { speed: 9.31, deg: 208 },
        sys: { pod: "n" },
        dt_txt: "2020-02-10 18:00:00"
      },
      {
        dt: 1581368400,
        main: {
          temp: 272.64,
          feels_like: 264.3,
          temp_min: 272.64,
          temp_max: 272.64,
          pressure: 996,
          sea_level: 996,
          grnd_level: 975,
          humidity: 88,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13n" }
        ],
        clouds: { all: 100 },
        wind: { speed: 8.64, deg: 200 },
        snow: { "3h": 0.38 },
        sys: { pod: "n" },
        dt_txt: "2020-02-10 21:00:00"
      },
      {
        dt: 1581379200,
        main: {
          temp: 272.86,
          feels_like: 265.23,
          temp_min: 272.86,
          temp_max: 272.86,
          pressure: 995,
          sea_level: 995,
          grnd_level: 974,
          humidity: 94,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13n" }
        ],
        clouds: { all: 100 },
        wind: { speed: 7.84, deg: 203 },
        snow: { "3h": 0.25 },
        sys: { pod: "n" },
        dt_txt: "2020-02-11 00:00:00"
      },
      {
        dt: 1581390000,
        main: {
          temp: 273.58,
          feels_like: 265.79,
          temp_min: 273.58,
          temp_max: 273.58,
          pressure: 993,
          sea_level: 993,
          grnd_level: 972,
          humidity: 91,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13n" }
        ],
        clouds: { all: 100 },
        wind: { speed: 8.11, deg: 192 },
        snow: { "3h": 0.19 },
        sys: { pod: "n" },
        dt_txt: "2020-02-11 03:00:00"
      },
      {
        dt: 1581400800,
        main: {
          temp: 273.19,
          feels_like: 265.79,
          temp_min: 273.19,
          temp_max: 273.19,
          pressure: 992,
          sea_level: 992,
          grnd_level: 972,
          humidity: 97,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13d" }
        ],
        clouds: { all: 100 },
        wind: { speed: 7.66, deg: 196 },
        snow: { "3h": 1.19 },
        sys: { pod: "d" },
        dt_txt: "2020-02-11 06:00:00"
      },
      {
        dt: 1581411600,
        main: {
          temp: 273.56,
          feels_like: 266.71,
          temp_min: 273.56,
          temp_max: 273.56,
          pressure: 991,
          sea_level: 991,
          grnd_level: 970,
          humidity: 98,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13d" }
        ],
        clouds: { all: 100 },
        wind: { speed: 6.98, deg: 185 },
        snow: { "3h": 1.38 },
        sys: { pod: "d" },
        dt_txt: "2020-02-11 09:00:00"
      },
      {
        dt: 1581422400,
        main: {
          temp: 274.31,
          feels_like: 267.22,
          temp_min: 274.31,
          temp_max: 274.31,
          pressure: 990,
          sea_level: 990,
          grnd_level: 969,
          humidity: 98,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13d" }
        ],
        clouds: { all: 100 },
        wind: { speed: 7.48, deg: 193 },
        snow: { "3h": 1 },
        sys: { pod: "d" },
        dt_txt: "2020-02-11 12:00:00"
      },
      {
        dt: 1581433200,
        main: {
          temp: 273.99,
          feels_like: 267.41,
          temp_min: 273.99,
          temp_max: 273.99,
          pressure: 991,
          sea_level: 991,
          grnd_level: 970,
          humidity: 97,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13n" }
        ],
        clouds: { all: 100 },
        wind: { speed: 6.65, deg: 216 },
        snow: { "3h": 0.38 },
        sys: { pod: "n" },
        dt_txt: "2020-02-11 15:00:00"
      },
      {
        dt: 1581444000,
        main: {
          temp: 273.97,
          feels_like: 268.47,
          temp_min: 273.97,
          temp_max: 273.97,
          pressure: 995,
          sea_level: 995,
          grnd_level: 974,
          humidity: 92,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13n" }
        ],
        clouds: { all: 100 },
        wind: { speed: 4.95, deg: 226 },
        snow: { "3h": 0.19 },
        sys: { pod: "n" },
        dt_txt: "2020-02-11 18:00:00"
      },
      {
        dt: 1581454800,
        main: {
          temp: 272.4,
          feels_like: 267.39,
          temp_min: 272.4,
          temp_max: 272.4,
          pressure: 997,
          sea_level: 997,
          grnd_level: 975,
          humidity: 92,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 95 },
        wind: { speed: 3.95, deg: 199 },
        sys: { pod: "n" },
        dt_txt: "2020-02-11 21:00:00"
      },
      {
        dt: 1581465600,
        main: {
          temp: 271.63,
          feels_like: 266.79,
          temp_min: 271.63,
          temp_max: 271.63,
          pressure: 998,
          sea_level: 998,
          grnd_level: 976,
          humidity: 93,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 95 },
        wind: { speed: 3.6, deg: 179 },
        sys: { pod: "n" },
        dt_txt: "2020-02-12 00:00:00"
      },
      {
        dt: 1581476400,
        main: {
          temp: 271.75,
          feels_like: 266.46,
          temp_min: 271.75,
          temp_max: 271.75,
          pressure: 997,
          sea_level: 997,
          grnd_level: 976,
          humidity: 94,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 4.29, deg: 167 },
        sys: { pod: "n" },
        dt_txt: "2020-02-12 03:00:00"
      },
      {
        dt: 1581487200,
        main: {
          temp: 272.7,
          feels_like: 267.04,
          temp_min: 272.7,
          temp_max: 272.7,
          pressure: 997,
          sea_level: 997,
          grnd_level: 976,
          humidity: 97,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13d" }
        ],
        clouds: { all: 100 },
        wind: { speed: 5.08, deg: 164 },
        snow: { "3h": 0.31 },
        sys: { pod: "d" },
        dt_txt: "2020-02-12 06:00:00"
      },
      {
        dt: 1581498000,
        main: {
          temp: 273.46,
          feels_like: 267.78,
          temp_min: 273.46,
          temp_max: 273.46,
          pressure: 997,
          sea_level: 997,
          grnd_level: 977,
          humidity: 98,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13d" }
        ],
        clouds: { all: 100 },
        wind: { speed: 5.28, deg: 182 },
        snow: { "3h": 0.13 },
        sys: { pod: "d" },
        dt_txt: "2020-02-12 09:00:00"
      },
      {
        dt: 1581508800,
        main: {
          temp: 273.44,
          feels_like: 268.1,
          temp_min: 273.44,
          temp_max: 273.44,
          pressure: 998,
          sea_level: 998,
          grnd_level: 977,
          humidity: 98,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13d" }
        ],
        clouds: { all: 100 },
        wind: { speed: 4.8, deg: 183 },
        snow: { "3h": 0.19 },
        sys: { pod: "d" },
        dt_txt: "2020-02-12 12:00:00"
      },
      {
        dt: 1581519600,
        main: {
          temp: 273.17,
          feels_like: 268.61,
          temp_min: 273.17,
          temp_max: 273.17,
          pressure: 999,
          sea_level: 999,
          grnd_level: 978,
          humidity: 97,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13n" }
        ],
        clouds: { all: 100 },
        wind: { speed: 3.6, deg: 182 },
        snow: { "3h": 0.13 },
        sys: { pod: "n" },
        dt_txt: "2020-02-12 15:00:00"
      },
      {
        dt: 1581530400,
        main: {
          temp: 271.74,
          feels_like: 267.49,
          temp_min: 271.74,
          temp_max: 271.74,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 980,
          humidity: 97,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13n" }
        ],
        clouds: { all: 100 },
        wind: { speed: 2.87, deg: 194 },
        snow: { "3h": 0.13 },
        sys: { pod: "n" },
        dt_txt: "2020-02-12 18:00:00"
      },
      {
        dt: 1581541200,
        main: {
          temp: 270.97,
          feels_like: 267.16,
          temp_min: 270.97,
          temp_max: 270.97,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 980,
          humidity: 96,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13n" }
        ],
        clouds: { all: 100 },
        wind: { speed: 2.08, deg: 244 },
        snow: { "3h": 0.13 },
        sys: { pod: "n" },
        dt_txt: "2020-02-12 21:00:00"
      },
      {
        dt: 1581552000,
        main: {
          temp: 270.8,
          feels_like: 267.21,
          temp_min: 270.8,
          temp_max: 270.8,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 981,
          humidity: 97,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 1.77, deg: 256 },
        sys: { pod: "n" },
        dt_txt: "2020-02-13 00:00:00"
      },
      {
        dt: 1581562800,
        main: {
          temp: 270.52,
          feels_like: 266.29,
          temp_min: 270.52,
          temp_max: 270.52,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 982,
          humidity: 96,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13n" }
        ],
        clouds: { all: 100 },
        wind: { speed: 2.61, deg: 273 },
        snow: { "3h": 0.13 },
        sys: { pod: "n" },
        dt_txt: "2020-02-13 03:00:00"
      },
      {
        dt: 1581573600,
        main: {
          temp: 270.59,
          feels_like: 266.19,
          temp_min: 270.59,
          temp_max: 270.59,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 983,
          humidity: 93,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 2.79, deg: 269 },
        sys: { pod: "d" },
        dt_txt: "2020-02-13 06:00:00"
      },
      {
        dt: 1581584400,
        main: {
          temp: 272.33,
          feels_like: 267.29,
          temp_min: 272.33,
          temp_max: 272.33,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 984,
          humidity: 85,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 3.79, deg: 268 },
        sys: { pod: "d" },
        dt_txt: "2020-02-13 09:00:00"
      },
      {
        dt: 1581595200,
        main: {
          temp: 273.32,
          feels_like: 269.42,
          temp_min: 273.32,
          temp_max: 273.32,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 985,
          humidity: 87,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 2.39, deg: 253 },
        sys: { pod: "d" },
        dt_txt: "2020-02-13 12:00:00"
      },
      {
        dt: 1581606000,
        main: {
          temp: 272.48,
          feels_like: 267.81,
          temp_min: 272.48,
          temp_max: 272.48,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 986,
          humidity: 86,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 3.32, deg: 245 },
        sys: { pod: "n" },
        dt_txt: "2020-02-13 15:00:00"
      },
      {
        dt: 1581616800,
        main: {
          temp: 271.9,
          feels_like: 267.18,
          temp_min: 271.9,
          temp_max: 271.9,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 987,
          humidity: 90,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 98 },
        wind: { speed: 3.39, deg: 237 },
        sys: { pod: "n" },
        dt_txt: "2020-02-13 18:00:00"
      },
      {
        dt: 1581627600,
        main: {
          temp: 270.04,
          feels_like: 264.62,
          temp_min: 270.04,
          temp_max: 270.04,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 988,
          humidity: 92,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 92 },
        wind: { speed: 4.14, deg: 244 },
        sys: { pod: "n" },
        dt_txt: "2020-02-13 21:00:00"
      },
      {
        dt: 1581638400,
        main: {
          temp: 270.04,
          feels_like: 265.23,
          temp_min: 270.04,
          temp_max: 270.04,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 989,
          humidity: 94,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 87 },
        wind: { speed: 3.31, deg: 235 },
        sys: { pod: "n" },
        dt_txt: "2020-02-14 00:00:00"
      },
      {
        dt: 1581649200,
        main: {
          temp: 272.06,
          feels_like: 266.63,
          temp_min: 272.06,
          temp_max: 272.06,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 990,
          humidity: 91,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 89 },
        wind: { speed: 4.46, deg: 246 },
        sys: { pod: "n" },
        dt_txt: "2020-02-14 03:00:00"
      },
      {
        dt: 1581660000,
        main: {
          temp: 272.46,
          feels_like: 267.15,
          temp_min: 272.46,
          temp_max: 272.46,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 991,
          humidity: 90,
          temp_kf: 0
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
        ],
        clouds: { all: 84 },
        wind: { speed: 4.34, deg: 252 },
        sys: { pod: "d" },
        dt_txt: "2020-02-14 06:00:00"
      },
      {
        dt: 1581670800,
        main: {
          temp: 273.05,
          feels_like: 267.6,
          temp_min: 273.05,
          temp_max: 273.05,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 993,
          humidity: 88,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 4.58, deg: 247 },
        sys: { pod: "d" },
        dt_txt: "2020-02-14 09:00:00"
      },
      {
        dt: 1581681600,
        main: {
          temp: 272.99,
          feels_like: 267.29,
          temp_min: 272.99,
          temp_max: 272.99,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 994,
          humidity: 89,
          temp_kf: 0
        },
        weather: [
          { id: 600, main: "Snow", description: "light snow", icon: "13d" }
        ],
        clouds: { all: 100 },
        wind: { speed: 4.96, deg: 246 },
        snow: { "3h": 0.13 },
        sys: { pod: "d" },
        dt_txt: "2020-02-14 12:00:00"
      },
      {
        dt: 1581692400,
        main: {
          temp: 271.61,
          feels_like: 266.36,
          temp_min: 271.61,
          temp_max: 271.61,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 995,
          humidity: 91,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 96 },
        wind: { speed: 4.13, deg: 236 },
        sys: { pod: "n" },
        dt_txt: "2020-02-14 15:00:00"
      },
      {
        dt: 1581703200,
        main: {
          temp: 270.48,
          feels_like: 265.54,
          temp_min: 270.48,
          temp_max: 270.48,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 995,
          humidity: 93,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 92 },
        wind: { speed: 3.54, deg: 240 },
        sys: { pod: "n" },
        dt_txt: "2020-02-14 18:00:00"
      }
    ],
    city: {
      id: 524901,
      name: "Moscow",
      coord: { lat: 55.7522, lon: 37.6156 },
      country: "RU",
      timezone: 10800,
      sunrise: 1581224943,
      sunset: 1581257910
    }
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
