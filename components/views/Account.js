import html from "html-literal";

export default state => html`
  <body>
    <form action="https://formspree.io/f/xpzndvdk" method="POST">
    <h2>Account Info</h2>
    <section id="accounts">
    <h4>Create an Account</h4>
      <form id="account" method="POST" action="">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Address"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Motorcycle info"

          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Security Question"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Riding experience"

          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Social Media Account"

          /></div>

          <div><input type="submit" name="submit" value="Submit" />
        </div>
      </form>
    </section>
    <!-- <img
      class="img"
      src="https://images.pexels.com/photos/210137/pexels-photo-210137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    /> -->

    <img class="img" src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/361573852_7095535950473950_5117167841081331828_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=25_BGCMIhH0AX_G4SuF&_nc_ht=scontent-ord5-2.xx&oh=00_AfA8dNDv5LyNzcUlweu12HjVPcEYjlUUQR_-o-clCTq-oA&oe=64C3F140"/>
  </body>
`;
