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
    <!-- <img
      class="img"
      src="https://images.pexels.com/photos/1407130/pexels-photo-1407130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    /> -->
    <img
      class="img"
      src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/348696799_631553682165259_1481974678079914409_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZBCvxgOG0ZoAX_yJGj0&_nc_ht=scontent-ord5-1.xx&oh=00_AfCjoRtvYRlaVWhkajhJZwHzBUnsByMGTLx8DZzax7GU9A&oe=64C33D77"
    />
  </body>
`;
