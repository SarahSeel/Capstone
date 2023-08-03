import html from "html-literal";

export default state => html`
  <h2>Welcome to Moto Journey!</h2>
  <div>
    <a href="#" id="photos-container">
      <img src="${state.imageSource}" alt="" id="photos" />
    </a>
  </div>

  <div>
    API Status: ${state.status.message}
  </div>
`;
