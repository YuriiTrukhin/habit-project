import React, { Component } from "react";
import styles from "./Autentification.module.css";
// import Loginization from "../Loginization/Loginization.js";
// import Registration from "../Registration/Registration.js";

class Autentification extends Component {
  state = {
    users: [
      {
        name: "Yurii",
        surname: "Trukhin",
        phone: "0669401993",
      },
    ],
  };
  onBtnClick = (e) => {
    if (e.target.textContent === "Вход") {
      console.log("login");
    } else {
      console.log("register");
    }
  };
  render() {
    return (
      <>
        <section className={styles.sectionAutifications}>
          <button type="button" onClick={this.onBtnClick}>
            Вход
          </button>
          <button type="button" onClick={this.onBtnClick}>
            Создать аккаунт
          </button>
        </section>
      </>
    );
  }
}
export default Autentification;
