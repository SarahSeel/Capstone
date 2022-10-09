import html from "html-literal";

export default links => html`
  <nav class="navigation">
    <div class="sidebar">
      <i class="fa-solid fa-bars"></i>
      <ul class="hidden--mobile nav-links">
        ${links
          .map(
            link =>
              `<li><a href="/${link.title}" title="${link.title}" data-navigo<i class="${link.icon}"</i>${link.text}</a></li>`
          )
          .join("")}
      </ul>
    </div>
  </nav>
`;
