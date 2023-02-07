import data from "./App.js";

class User {
    constructor(userData) {
      this.name.title = ["titre"];
      this.name.first = ["Prénom"];
      this.name.last = ["Nom"];
      this.location.city = ["Ville"];
      this.location.country = ["Pays"];
      this.dob.age = ["Age"];
      this.email = ["Email"];
      this.picture.large = ["Photo"];
      return this;
    }
};

const renderUser = (data) => {
    const html = `
      <article>
          <div class=></div>
          <div class=></div>
          <div class=></div>
      </article>
      `;
    results.insertAdjacentHTML("beforeend", html);
  };


export default User;
