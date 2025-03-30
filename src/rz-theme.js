import { LitElement, css } from "lit";
import { html, literal } from "lit/static-html.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class RzTheme extends LitElement {
  dark = literal` <img
      src="/rz-theme/moon-outline.svg"
      alt="toogle light Mode"
      title="toogle light Mode"
      width="15px"
      height="auto"
      id="darkM"
      decoding="auto"
    />`;

  light = literal`
      <img
        src="/rz-theme/sunny-outline.svg"
        alt="toogle dark Mode"
        title="toogle dark Mode"
        width="15px"
        height="auto"
        id="lightM"
      />
    `;

  static get properties() {
    return {
      currentMode: { type: String },
      content: { type: String },
    };
  }

  constructor() {
    super();
    this.currentMode = "";
    this.checkMode();
  }

  checkMode() {
    this.currentMode = localStorage.getItem("theme");

    if (this.currentMode === "light") {
      this.currentMode = "light";
      this.content = this.dark;
      document.documentElement.setAttribute("data-theme", this.currentMode);
      this.render();
      return;
    } else if (this.currentMode === "dark") {
      this.currentMode = "dark";
      this.content = this.light;
      document.documentElement.setAttribute("data-theme", this.currentMode);
      this.render();
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      this.content = this.light;
      this.currentMode = "dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      this.content = this.dark;
      this.currentMode = "light";
    }
    localStorage.setItem("theme", this.currentMode);
    this.render();
  }

  render() {
    return html`
      ${this.cssTemplate()}
      <span id="theme-toggle" @click="${this._handleToggle}">
        ${this.content}
      </span>
    `;
  }

  _handleToggle() {
    this.currentMode = localStorage.getItem("theme");

    if (this.currentMode === "light") {
      this.currentMode = "dark";
      this.content = this.light;
    } else {
      this.currentMode = "light";
      this.content = this.dark;
    }

    document.documentElement.setAttribute("data-theme", this.currentMode);
    localStorage.setItem("theme", this.currentMode);
    return html`${this.content}`;
  }

  _onClick() {
    this.count++;
  }

  static get styles() {
    return css`
      color: red;
    `;
  }

  cssTemplate() {
    return html`<style>
      @import url("/rz-theme/rz-theme.css");
    </style>`;
  }
}

window.customElements.define("rz-theme", RzTheme);
