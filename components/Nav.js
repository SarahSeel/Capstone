import html from "html-literal";

export default links => html`
      <nav>
      <div class="Logo">Moto Journey</div>
    <i class="fas fa-bars"></i>
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
