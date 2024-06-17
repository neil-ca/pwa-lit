import { LitElement, css, html } from "lit";

export class RecipeCard extends LitElement {
  static properties = {
    name: { type: String },
    ingredients: { type: String },
    img: { type: String },
  };

  constructor() {
    super();
    this.name = "No name";
    (this.ingredients = "No ingredients"), (this.img = "AlternativeURL");
  }

  static styles = css`
    .recipe-card {
      border-radius: 8px;
      width: 600px;
      height: 100px;
      display: flex;
      gap: 4px;
      box-shadow: 11px 8px 19px 0px rgba(0, 0, 0, 0.21);
      padding: 8px;
    }

    .info-cont {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .recipe-img {
      border-radius: 5px;
    }
    .point {
      cursor: pointer;
    }
  `;

  _dispatchLogin() {
    const options = {
      detail: { id: this.id },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("remove", options));
  }

  render() {
    return html`
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div class="recipe-card ">
        <img class="recipe-img" src=${this.img} />

        <div class="info-cont">
          <div>
            <p>${this.name}</p>
            <p>${this.ingredients}</p>
          </div>
          <i
            @click=${this._dispatchLogin}
            class="material-icons point"
            data-id="1"
            >delete_outline</i
          >
        </div>
      </div>
    `;
  }
}

customElements.define("recipe-card", RecipeCard);
