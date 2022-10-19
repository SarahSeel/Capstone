import html from "html-literal";

export default links => html`
  <body>
    <nav>
      <div class="Logo">
        <h2>Moto Journey</h2>
      </div>
      <div class="Navbar"></div>
      <div>
        <ul class="hidden--mobile">
          <div><i class="fa-solid fa-motorcycle"></i></div>
          ${links
            .map(
              link =>
                `<li><a href="/${link.title}" title="${link.title}" data-navigo <i class="${link.icon}" </i> ${link.text}</a></li>`
            )
            .join("")}
        </ul>
      </div>
    </nav>
  </body>
`;
