import html from "html-literal";

export default state => html`
  <h2>Lets plan your Starting Point and directing you to your End Point!</h2>
  <form id="directions" method="POST" action="">
    <div id="startLocation">
      <h4>Starting Location:</h4>
    </div>
    <div>
      <label for="fromStreet">Street:</label>
      <input
        type="text"
        name="fromStreet"
        id="fromStreet"
        placeholder="Enter Street Address"
        required
      />
    </div>
    <div>
      <label for="fromCity">City:</label>
      <input
        type="text"
        name="fromCity"
        id="fromCity"
        placeholder="Enter City"
        required
      />
    </div>
    <div>
      <label for="fromState">State:</label>
      <input
        type="text"
        name="fromState"
        id="fromState"
        placeholder="Enter State Abbreviations"
        required
      />
    </div>
    <div id="toLocation">
      <h4>Final Location:</h4>
    </div>
    <div>
      <label for="toStreet">Street:</label>
      <input
        type="text"
        name="toStreet"
        id="toStreet"
        placeholder="Enter Street Address"
        required
      />
    </div>
    <div>
      <label for="toCity">City:</label>
      <input
        type="text"
        name="toCity"
        id="toCity"
        placeholder="Enter City"
        required
      />
    </div>
    <div>
      <label for="toState">State:</label>
      <input
        type="text"
        name="toState"
        id="toState"
        placeholder="Enter State Abbreviations"
        required
      />
    </div>
    <input type="submit" name="submitDirection" value="Submit Route" />
  </form>

  <div class="direc"><h2>Here are your directions:</h2></div>

  <div class="directions">
    <ul class="directions">
      ${checkDirections(state.directions.maneuvers)}
    </ul>
  </div>
`;

function checkDirections(maneuvers) {
  if (maneuvers) {
    return maneuvers.map(
      leg => `<li>${leg.narrative}</li><li><img src="${leg.mapUrl}"></li>`
    );
  } else {
    return;
  }
}
