class MyNav extends HTMLElement {
    connectedCallback() {
        let selected = this.getAttribute("selected-index");
        this.innerHTML = /*html*/ `
      <img class="logo" alt="logo" src="${ROOT}img/logo.png">
      <nav>
      <div>
      <a class="first-link nav-link${
          selected == 0 ? " active" : ""
      }" href="${ROOT}">Home</a>
      <a class="nav-link${
          selected == 1 ? " active" : ""
      }" href="${ROOT}about">About</a>
      <a class="nav-link${
          selected == 2 ? " active" : ""
      }" href="${ROOT}blog">Blog</a>
      <a class="nav-link${
          selected == 3 ? " active" : ""
      }" href="${ROOT}my_projects">Projects</a>
      </div>
      <div>
          <a class="nav-link scl" href="https://www.github.com/Cheespeasa1234" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a class="nav-link scl" href="https://www.twitter.com/CiY310" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a class="nav-link scl" href="mailto:natelevison@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </nav>
    `;
    }
}
customElements.define("my-nav", MyNav);