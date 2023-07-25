import html from "html-literal";

export default state => html`
  <a href="#" id="photos-container">
    <img src="${state.imageSource}" alt="" id="photos" />
  </a>

  <div>
    API Status: ${state.status.message}
  </div>
`;
