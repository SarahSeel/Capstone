import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  afterRender(state);

  router.updatePageLinks();
}
function afterRender() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    switch (view) {
      case "Weather":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Weather.weather = {};
            store.Weather.weather.city = response.data.name;
            store.Weather.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Weather.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Weather.weather.description = response.data.weather[0].main;

            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      // case "Map":
      //   const options = {
      //     method: "GET",
      //     url: "https://waze.p.rapidapi.com/driving-directions",
      //     params: {
      //       source_coordinates: "32.0852999,34.78176759999999",
      //       destination_coordinates: "32.7940463,34.989571"
      //     },
      //     headers: {
      //       "X-RapidAPI-Key":
      //         "6286e1c6cdmsh3a3b55c77e0b8b7p182286jsn4c1edbefb28f",
      //       "X-RapidAPI-Host": "waze.p.rapidapi.com"
      //     }
      //   };

      //   axios
      //     .request(options)
      //     .then(function(response) {
      //       console.log(response.data);
      //     })
      //     .catch(function(error) {
      //       console.error(error);
      //     });
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
