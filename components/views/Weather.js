import html from "html-literal";
import * as weatherPhotos from "./Weather";

export default state => html`
  <h2>Today's Weather Forecast</h2>
  <body>
    <h3>
      The weather in ${state.weather.city} is
      <i>${state.weather.description}</i>. Temperature is ${state.weather.temp}
      F, and it feels like <i>${state.weather.feelsLike}</i> F.
    </h3>
    <div><img id="weatherIcon" src="${state.weather.icon}" /></div>
    <!-- <div>
      <img src="${weatherPhotos}" alt="" id="weatherForecast" />
    </div> -->
  </body>
`;
