import html from "html-literal";

export default state => html`
  <body>
    <section id="Account">
      <form id="account" method="POST" action="">
        <h2><b>Account</b></h2>
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
            required
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
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Social Media Account"
            required
          />
        </div>
      </form>
    </section>
  </body>
`;
