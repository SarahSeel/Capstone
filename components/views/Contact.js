import html from "html-literal";

export default state => html`
  <body>
    <form action="https://formspree.io/f/xpzndvdk" method="POST">
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
            <textarea
              name="message"
              id="message"
              placeholder="Place message here"
            ></textarea>
          </div>

          <input type="submit" name="submit" value="Submit" />
        </form>
      </section>
    </form>
  </body>
`;
