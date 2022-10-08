import html from "html-literal";

export default links => html`
  <!-- <nav>
    <div>
      <i class="fa-solid fa-bars"></i>
      <ul class="hidden--mobile nav-links">
        ${links
    .map(
      link =>
        `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
    )
    .join("")}
      </ul>
    </div>
  </nav> -->
  <nav>
    <div class="navigation">
      <div class="sidebar">
        <ul class="hidden--mobile nav-links">
          <li>
            <a href="#"><i class="fa-solid fa-house"></i>Home</a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-user"></i>Account</a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-temperature-half"></i>Weather</a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-motorcycle"></i>Trip</a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-map"></i>Map</a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-calendar-days"></i>Events</a>
          </li>

          <li>
            <a href="#"><i class="fa-solid fa-address-card"></i>About Us</a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-phone"></i>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;
