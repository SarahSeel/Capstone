import html from "html-literal";

export default state => html`
  <body>
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>

    <img
      class="img"
      src="https://images.pexels.com/photos/10169761/pexels-photo-10169761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
  </body>
`;
