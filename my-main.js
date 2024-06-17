import { LitElement, html, css } from "lit";
import "./top-nav";
import "./recipe-card";
import { recipes } from "./list";

export class MyMain extends LitElement {
  static properties = {
    recipesList: { type: Array },
    isOpen: { type: Boolean },
    countId: { type: Number },
  };

  constructor() {
    super();
    this.recipesList = recipes;
    this.countId = 0;

    this.isOpen = false;
    this.img =
      "https://www.bupasalud.com.mx/sites/default/files/inline-images/bupa_598072389.jpg";
  }

  static styles = [
    css`
      .container-recipe-cards {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 24px;
        width: 100%;
        gap: 12px;
      }

      .side-open {
        transform: translateX(0%);
      }

      .overlay-open {
        display: block;
        opacity: 1;
      }
      .container-btn {
        display: flex;
        justify-content: center;
        margin-top: 24px;
        margin-bottom: 24px;
      }
    `,
  ];

  get inputName() {
    return this.renderRoot?.querySelector("#name") ?? null;
  }
  get inputIngredients() {
    return this.renderRoot?.querySelector("#ingredients") ?? null;
  }

  addRecipe = () => {
    if (!this.inputName.value || !this.inputIngredients.value) return;

    this.countId++;
    this.recipesList = [
      ...this.recipesList,
      {
        img: this.img,
        id: this.countId,
        name: this.inputName.value,
        ingredients: this.inputIngredients.value,
      },
    ];
    this.isOpen = false;
    this.inputName.value = "";
    this.inputIngredients.value = "";
  };

  removeRecipe = (e) => {
    const recipe = this.renderRoot?.getElementById(e.detail.id);
    recipe.remove();
  };

  render() {
    return html`
      <link rel="stylesheet" href="css/materialize.min.css" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <top-nav></top-nav>

      <div class="container-recipe-cards">
        ${this.recipesList.map(
          (recipe) => html`
            <recipe-card
              @remove=${this.removeRecipe}
              id=${"recipe" + recipe.id}
              img=${recipe.img}
              name=${recipe.name}
              ingredients=${recipe.ingredients}
            ></recipe-card>
          `
        )}
      </div>

      <div class="container-btn">
        <ul
          id="slide-out"
          class=${this.isOpen ? "sidenav side-open" : "sidenav"}
        >
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input
                    placeholder="Name"
                    id="name"
                    type="text"
                    class="validate"
                  />
                </div>
                <div class="input-field col s12">
                  <input
                    placeholder="Ingredients"
                    id="ingredients"
                    type="text"
                    class="validate"
                  />
                </div>
              </div>
              <a
                @click=${this.addRecipe}
                class="waves-effect waves-light btn red"
                >Add</a
              >
            </form>
          </div>
        </ul>
        <div
          @click=${() => (this.isOpen = false)}
          class=${this.isOpen
            ? "sidenav-overlay overlay-open"
            : "sidenav-overlay"}
        ></div>
        <a
          @click=${() => (this.isOpen = !this.isOpen)}
          class="btn-floating btn-large waves-effect waves-light red"
          ><i class="material-icons">add</i></a
        >
      </div>
    `;
  }
}
customElements.define("my-main", MyMain);
