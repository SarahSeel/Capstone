import html from "html-literal";

export default links => html`
  <!-- <nav class="navbar">
    <div class="Logo">Moto Journey</div>
    </div>

    <div class="hamburger">
    <i class="fa-solid fa-motorcycle"></i>
      <ul class="hidden--mobile"> -->

      <nav>
      <div class="Logo">Moto Journey</div>
    </div>
    <i class="fa-solid fa-motorcycle"></i>
    <ul class="hidden--mobile nav-links">
        ${links
          .map(
            link =>
              `<li><a href="/${link.title}" title="${link.title}" data-navigo <i class="${link.icon}" </i> ${link.text}</a></li>`
          )
          .join("")}
      </ul>
    </div>
  </nav>
`;
