import React, { Component } from "react";
import styles from "./Profile.module.css";

class Profile extends Component {
  state = {
    avatar: "",
    height: "",
    weight: "",
    birthdate: "",
  };

  handleOnChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
    // this.setState({
    //   avatar: "",
    //   height: "",
    //   weight: "",
    //   birthdate: "",
    // });
  };
  render() {
    return (
      <>
        <button type="button">Назад</button>
        <form action="" className={styles.form} onSubmit={this.handleOnSubmit}>
          <label htmlFor="">
            {" "}
            Сменить фото
            <input type="text" value={this.state.avatar} name="avatar" onChange={this.handleOnChange} />
          </label>
          <label htmlFor="">
            {" "}
            Рост
            <input
              type="number"
              value={this.state.height}
              name="height"
              onChange={this.handleOnChange}
              placeholder="170см"
            />
          </label>
          <label htmlFor="">
            Вес
            <input
              type="number"
              value={this.state.weight}
              name="weight"
              onChange={this.handleOnChange}
              placeholder="70 кг"
            />
          </label>
          <label htmlFor="">
            Дата рождения
            <input
              type="date"
              value={this.state.birthdate}
              name="birthdate"
              onChange={this.handleOnChange}
              placeholder="01.01.1990"
            />
          </label>

          <input type="submit" value="Создать" />
        </form>
      </>
    );
  }
}
export default Profile;
