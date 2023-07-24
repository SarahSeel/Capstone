import html from "html-literal";
import * as photos from "../../assets";

export default state => html`
  <!-- <div>
    <img
      class="img"
      src="https://images.pexels.com/photos/5921940/pexels-photo-5921940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
    <img
      class="img"
      src="https://images.pexels.com/photos/1416169/pexels-photo-1416169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
  </div> -->

  <!-- <div>
    <img
      class="img"
      src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/361583966_10222918880822695_4299083872048711696_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=79524b&_nc_ohc=ymuwjFenZj0AX_DXq95&_nc_ht=scontent-ord5-1.xx&oh=00_AfDc7qCl2WYcklA7P-qqZsQNAfrncFf1d_IDWbfm_749Nw&oe=64C3CE85"
    />
  </div> -->

  <!-- <body>
    <div>
      <img src="${photos.Desert}" />
      <img src="${photos.Desert2}" />
      <img src="${photos.Happy}" />
      <img src="${photos.Harley}" />
      <img src="${photos.Honda}" />
      <img src="${photos.Jefferson}" />
      <img src="${photos.Ocean}" />
    </div>
    <img src="${photos.Sarah}" />
    <img src="${photos.Smokies}" />
    <img src="${photos.Storm}" />
  </body> -->

  <div>
    API Status: ${state.status.message}
  </div>
`;
