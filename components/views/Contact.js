import html from "html-literal";

export default state => html`
  <body>
    <section id="Contact">
      <form id="contacting" method="POST" action="">
        <h2><b>CONTACT US!</b></h2>
        <h4>Please share with us what is troubling you.</h4>
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
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            required
          />
        </div>

        <input type="submit" name="submit" value="Submit" />
      </form>
    </section>
  </body>
`;
