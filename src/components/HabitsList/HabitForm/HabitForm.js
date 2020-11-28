import React, { Component } from "react";
import styles from "../HabitForm/HabitForm.module.css";
import { v4 as uuidv4 } from "uuid";
// import PropTypes from "prop-types";

export default class HabitForm extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };
  state = {
    title: "",
    comment: "",
    repeat: "",
    color: "",
    remind: false,
  };
  closeId = null;
  componentWillUnmount() {
    clearTimeout(this.closeId);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { title, comment, color, repeat, remind } = this.state;
    const habit = {
      id: uuidv4(),
      comment: comment,
      color: color,
      title: title,
      repeat: repeat,
      remind: remind,
      startDate: Date.now(),
      progress: this.toSetProgress(Date.now()),
      // finishDate: Date.now() * 21 * 24 * 60 * 60 * 1000,
    };
    this.props.toAddHabit(habit);
    this.setState({
      title: "",
      comment: "",
      repeat: "",
      color: "",
      remind: false,
    });
    alert("Привычка добавлена");
    this.closeId = setTimeout(this.props.modalToggle, 1000);
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.type === "checbox" ? target.checked : target.value });
  };

  toSetProgress = (startDate) => {
    //(currentDate-startDate)*100/21%
    const dateNow = Date.now();
    const progress = Math.round(((dateNow - startDate) * 100) / (21 * 24 * 60 * 60 * 1000));
    return progress;
  };

  render() {
    const { title, comment, repeat, color, remind } = this.state;
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <div className={styles.header} style={{ backgroundColor: this.state.color }}>
            <button type="button" onClick={this.props.modalToggle}>
              Close
            </button>
            <h2>Новая привычка</h2>
            <label htmlFor="title">Название</label>
            <input type="text" name="title" value={title} onChange={this.handleChange} />
          </div>

          <label htmlFor="comment"> Мотивируй себя </label>
          <input type="textarea" name="comment" value={comment} onChange={this.handleChange} />

          <label htmlFor="repeat">Повторять</label>
          <select name="repeat" value={repeat} id="" onChange={this.handleChange}>
            <option value="24">Каждый день &#10148;</option>
            <option value="1">Каждый час &#10148;</option>
            <option value="2">Каждые два часа &#10148;</option>
          </select>

          <label htmlFor="color">Цвет</label>
          <input type="color" name="color" value={color} onChange={this.handleChange} />

          <label htmlFor="remind">Напоминание</label>
          <input type="checkbox" name="remind" checked={remind} onChange={this.handleChange} />

          <button type="submit" onSubmit={this.handleSubmit}>
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}
