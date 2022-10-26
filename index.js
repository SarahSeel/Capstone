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
  router.updatePageLinks();
  afterRender(state);
}

// Navbar Functionality

function afterRender(state) {
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
  if (state.view === "Home") {
    //Do DOM Stuff here
    console.log("Hello");
  }

  //Map API

  if (state.view === "Plantrip") {
    const formEntry = document.querySelector("form");
    const directionList = document.querySelector(".plantrip");

    formEntry.addEventListener("submit", async event => {
      event.preventDefault();

      console.log("matsinet-event:", event);

      // directionList.classList.toggle("directions");
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const from = {
        street: inputList.fromStreet.value,
        city: inputList.fromCity.value,
        state: inputList.fromStreet.value
      };

      store.Plantrip.from = from;
      store.Route.from = from;

      const to = {
        street: inputList.toStreet.value,
        city: inputList.toCity.value,
        state: inputList.toStreet.value
      };

      store.Plantrip.to = to;
      store.Route.to = to;

      if (event.submitter.name === "showDirections") {
        /*
          Please refer to the documentation:
          https://developer.mapquest.com/documentation/directions-api/
        */
        axios
          .get(
            `http://www.mapquestapi.com/directions/v2/route?key=${process.env.MAP_QUEST_API}&from=${from.street},${from.city},${from.state}&to=${to.street},+${to.city},+${to.state}`
          )
          .then(response => {
            store.Plantrip.directions = response.data;
            store.Plantrip.directions.maneuvers =
              response.data.route.legs[0].maneuvers;
            router.navigate("/Plantrip");
          })
          .catch(error => {
            console.log("Invalid Address", error);
          });
      }

      if (event.submitter.name === "showRoute") {
        router.navigate("/Route");
      }
    });
  }
  if (state.view === "Map") {
    /*
      Please refer to the documentation:
      https://developer.mapquest.com/documentation/mapquest-js/v1.3/
    */

    // eslint-disable-next-line no-undef
    L.mapquest.key = process.env.MAP_QUEST_API;

    // 'map' refers to a <div> element with the ID map
    // eslint-disable-next-line no-undef
    const map = L.mapquest.map("map", {
      center: [37.7749, -122.4194],
      // eslint-disable-next-line no-undef
      layers: L.mapquest.tileLayer("map"),
      zoom: 12
    });

    // eslint-disable-next-line no-undef
    map.addControl(L.mapquest.control());
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    //Weather API

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
