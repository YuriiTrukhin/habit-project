import React, { Component } from "react";
import styles from "./Registration.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../redux/store";

import addUser from "../../redux/actions/habitActions";

class Registration extends Component {
  state = {
    id: "",
    name: "",
    surname: "",
    tel: "",
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = (e) => {
    console.log(store.getState());
    const { name, surname, tel, id } = this.state;
    e.preventDefault();
    addUser.addUser();
    this.props.history.push({
      pathname: "/profile",
    });
  };
  render() {
    const { name, surname, tel } = this.state;
    return (
      <>
        <div className={styles.header}>
          <NavLink to="/" className="link">
            Назад
          </NavLink>
        </div>
        <form action="submit" className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor="name">Имя</label>
          <input type="text" name="name" value={name} placeholder="Имя" onChange={this.handleChange} />

          <label htmlFor="surname">Фамилия</label>
          <input type="text" name="surname" value={surname} onChange={this.handleChange} />

          <label htmlFor="tel">Номер телефона</label>
          <input type="tel" name="tel" value={tel} placeholder="+380" onChange={this.handleChange} />

          <input type="submit" value="Дальше" />
        </form>
      </>
    );
  }
}
const mapDispatchToProps = { addUser: addUser.addUser };
const mapStateToProps = (state, props) => ({
  state,
});
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
