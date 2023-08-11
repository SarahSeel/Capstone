import html from "html-literal";
import Logo from "../assets/Logo/MotoJourney.png";

export default links => html`
      <nav>
      <div id="Logo"> <img src="${Logo}">

  <div class="Logo">Moto Journey</div>
  </div>

    <i class="fas fa-bars"></i>
 <ul class="hidden--mobile nav-links">
        ${links
          .map(
            link =>
              html`
                <li>
                  <a href="/${link.title}" title="${link.title}" data-navigo>
                    <i class="${link.icon}"></i> ${link.text}</a
                  >
                </li>
              `
          )
          .join("")}
      </ul>
    </div>
  </nav>
`;
