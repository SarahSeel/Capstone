import html from "html-literal";

export default state => html`
  <body>
    <form action="https://formspree.io/f/xpzndvdk" method="POST">

    <section id="accounts">
      <form id="account" method="POST" action="">
        <h2><b>Account Info</b></h2>
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
  </body>
`;
