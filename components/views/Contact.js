import html from "html-literal";

export default state => html`
  <body>
    <form action="https://formspree.io/f/xpzndvdk" method="POST">
      <h2>CONTACT US!</h2>
      <section id="contact">
        <h4>Please share your valued input with us.</h4>
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
          <textarea
            name="message"
            id="message"
            placeholder="Place message here"
          ></textarea>
        </div>

        <input type="submit" name="submit" value="Submit" />
      </section>
    </form>
    <img
      class="img"
      src="https://images.pexels.com/photos/1407130/pexels-photo-1407130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
  </body>
`;
