import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import * as photos from "./assets";
import * as weatherPhotos from "./assets/Weather";

const photosArray = Object.values(photos);
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

  //Weather Info
  // let weatherPicture = {};
  // if (store.Weather.weather.description === "clear sky") {
  //   weatherPicture = `${weatherPhotos.ClearSky}`;
  // } else if (store.Weather.weather.description === "few clouds") {
  //   weatherPicture = `${weatherPhotos.Rain}`;
  // } else if (store.Weather.weather.description === "scattered clouds") {
  //   weatherPicture = `${weatherPhotos.ScatteredClouds}`;
  // } else if (store.Weather.weather.description === "broken clouds") {
  //   weatherPicture = `${weatherPhotos.BrokenClouds}`;
  // } else if (store.Weather.weather.description === "shower rain") {
  //   weatherPicture = `${weatherPhotos.ShowerRain}`;
  // } else if (store.Weather.weather.description === "rain") {
  //   weatherPicture = `${weatherPhotos.Rain}`;
  // } else if (store.Weather.weather.description === "thunderstorm") {
  //   weatherPicture = `${weatherPhotos.Thunderstorm}`;
  // } else if (store.Weather.weather.description === "snow") {
  //   weatherPicture = `${weatherPhotos.Snow}`;
  // } else if (store.Weather.weather.description === "mist") {
  //   weatherPicture = `${weatherPhotos.Mist}`;
  // } else {
  //   store.Weather.weather.description !== "none";
  //   console.log("Something went wrong with today's weather forecast");
  // }

  //Slide Show

  if (state.view === "Home") {
    const time = 4000;

    document
      .getElementById("photos-container")
      .addEventListener("click", event => {
        event.preventDefault();
        store.Home.imageIndex =
          store.Home.imageIndex === photosArray.length - 1
            ? 0
            : store.Home.imageIndex + 1;

        // if (store.Home.imageIndex === photosArray.length - 1) {
        //   store.Home.imageIndex = 0;
        // } else {
        //   store.Home.imageIndex++;
        // }

        console.log(store.Home.imageIndex);
        console.log(photosArray.length);
        store.Home.imageSource = photosArray[store.Home.imageIndex];

        const randomIndex = Math.floor(Math.random() * 10);
        store.Home.imageSource = photosArray[randomIndex];
        console.log(event.target);
        router.navigate("/");

        //Slide show Actions
        // let slide = 0;
        // change();
        // function change() {
        //   const slideShow = document.getElementById("photos-container");
        //   for (let i = 0; i < slideShow.length; i++) {
        //     slideShow[i].style.display = "none";
        //   }
        //   slide++;

        //   if (slide > slideShow.length) {
        //     slide = 1;
        //   }
        //   slideShow[slide - 1].style.display = "block";
        //   setTimeout(change, time);
        // }
      });
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

    const baseMap = L.mapquest.tileLayer("map");
    const tempMap = L.tileLayer(
      `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
      { layer: "temp_new" }
    );

    const rainMap = L.tileLayer(
      `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
      { layer: "precipitation_new" }
    );

    const windMap = L.tileLayer(
      `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
      { layer: "wind_new" }
    );

    // 'map' refers to a <div> element with the ID map
    // eslint-disable-next-line no-undef
    const map = L.mapquest.map("map", {
      center: [38.627003, -90.199402],
      // eslint-disable-next-line no-undef
      layers: baseMap,
      zoom: 8
    });

    //First layer
    L.control
      .layers(
        {
          Map: baseMap,
          Hybrid: L.mapquest.tileLayer("hybrid")
        },

        //Second layer
        {
          Temperature: tempMap,
          Precipitation: rainMap,
          Wind: windMap
        }
      )
      .addTo(map);

    // eslint-disable-next-line no-undef
    map.addControl(L.mapquest.control());
    L.mapquest
      .directionsControl({
        routeSummary: {
          enabled: false
        },
        narrativeControl: {
          enabled: true,
          compactResults: false
        }
      })

      .addTo(map);

    map.addLayer(L.mapquest.marketsLayer()); // Info of Incidents on Map
    map.addLayer(L.mapquest.trafficLayer()); // Traffic indicator on Map
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
            store.Weather.weather.icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
            store.Weather.weather.weatherPicture = {};

            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;

      //Home Page

      case "Home":
        store.Home.imageSource = photosArray[store.Home.imageIndex];
        axios
          .get(process.env.STATUS_API)
          .then(response => {
            store.Home.status = response.data;
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
