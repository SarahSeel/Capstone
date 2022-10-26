import html from "html-literal";

export default state => html`
  <div>
    <img
      class="img"
      src="https://images.pexels.com/photos/5921940/pexels-photo-5921940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
  </div>

  <div>
    API Status: ${state.status.message}
  </div>
`;
