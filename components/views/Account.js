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
    <img
      class="img"
      src="https://images.pexels.com/photos/210137/pexels-photo-210137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
  </body>
`;
