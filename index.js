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
function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-solid").addEventListener("click", () => {
    document
      .querySelector("navigation > ul")
      .classList.toggle("hidden--mobile");
  });
  if (state.view === "Map") {
    const formEntry = document.querySelector("form");
    const directionList = document.querySelector(".map");
    formEntry.addEventListener("submit", async event => {
      event.preventDefault();
      // directionList.classList.toggle("directions");
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const from = {
        street: inputList.fromStreet.value,
        city: inputList.fromCity.value,
        state: inputList.fromStreet.value
      };
      const to = {
        street: inputList.toStreet.value,
        city: inputList.toCity.value,
        state: inputList.toStreet.value
      };

      await axios
        .get(
          `http://www.mapquestapi.com/directions/v2/route?key=${process.env.MAP_QUEST_API}&from=${from.street},${from.city},${from.state}&to=${to.street},+${to.city},+${to.state}`
        )
        .then(response => {
          console.log(response.data);
          // console.log(response.data.route.legs[0].origNarrative);
          // store.Direction.directions = response.data;
          // store.Direction.directions.first =
          //   response.data.route.legs[0].origNarrative;
          store.Map.directions.maneuvers =
            response.data.route.legs[0].maneuvers;
          router.navigate("/Map");
        })
        .catch(error => {
          console.log("Invalid Address", error);
        });
    });
  }
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
      //   axios
      //     .get(
      //       `http://www.mapquestapi.com/directions/v2/route?key=${process.env.MAP_QUEST_API}&from=1%20Government%20Dr,St.%20Louis,Mo&to=700+Clark+Ave,+St.%20Louis,+MO`
      //     )
      //     .then(response => {
      //       console.log(response.data.route.legs[0].origNarrative);
      //       store.Map.directions = response.data;
      //       store.Map.directions.first =
      //         response.data.route.legs[0].origNarrative;
      //       store.Map.directions.maneuvers =
      //         response.data.route.legs[0].maneuvers;
      //       done();
      //     })
      //     .catch(error => {
      //       console.log("It puked", error);
      //       done();
      //     });
      // break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
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
