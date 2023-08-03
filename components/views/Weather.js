import html from "html-literal";
// import * as weatherPhotos from "./assets/Weather";

export default state => html`
  <h2>Today's Weather Forecast</h2>
  <body>
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
    <img id="weatherIcon" src="${state.weather.icon}" />
  </body>
`;
