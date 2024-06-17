import { LitElement, css, html } from "lit";

export class TopNav extends LitElement {
  static properties = {
    name: { type: String },
    ingredients: { type: String },
    isOpen: { type: Boolean },
  };
  constructor() {
    super();
    this.name = "default";
    this.ingredients = "default";
    this.isOpen = false;
  }

  static styles = css`
    .side-open {
      transform: translateX(0%) !important;
    }

    .overlay-open {
      display: block;
      opacity: 1;
    }

    .point {
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <link rel="stylesheet" href="css/materialize.min.css" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <nav class="z-depth-0">
        <div class="nav-wrapper container">
          <a href="/">Food<span>Ninja</span></a>
          <span @click=${() => (this.isOpen = true)} class="right ">
            <i
              class="point material-icons sidenav-trigger"
              data-target="side-menu"
              >menu</i
            >
          </span>
        </div>
      </nav>
      <ul
        id="side-menu"
        class="   ${this.isOpen
          ? "sidenav side-menu right-aligned side-open "
          : "sidenav side-menu right-aligned"}"
      >
        <li><a class="subheader">FOODNINJA</a></li>
        <li><a href="/" class="waves-effect">Home</a></li>
        <li><a href="/about.html" class="waves-effect">About</a></li>
        <li><a href="/contact.html" class="waves-effect">Contact</a></li>
      </ul>
      <div
        @click=${() => (this.isOpen = false)}
        class=${this.isOpen
          ? "sidenav-overlay overlay-open"
          : "sidenav-overlay"}
      ></div>
    `;
  }
}

customElements.define("top-nav", TopNav);
