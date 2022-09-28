import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h2><center>Motorcycle Navigation</center></h2>
  </section>

  <div>
    <img
      class="img"
      src="https://images.pexels.com/photos/5921940/pexels-photo-5921940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
  </div>

  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
