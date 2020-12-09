import React, { Component } from "react";
import styles from "./Loginization.module.css";
import { NavLink } from "react-router-dom";

class Loginization extends Component {
  state = {
    tel: "",
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/profile/habitList",
    });
  };
  render() {
    return (
      <>
        <div className={styles.header}>
          <NavLink to="/" className="link">
            Назад
          </NavLink>
        </div>
        <form action="submit" onSubmit={this.handleSubmit}>
          <label htmlFor="userPhone">Номер телефона</label>
          <input type="tel" name="tel" placeholder="+380" onChange={this.handleChange} />
          <input type="submit" value="Дальше" />
        </form>
      </>
    );
  }
}
export default Loginization;
