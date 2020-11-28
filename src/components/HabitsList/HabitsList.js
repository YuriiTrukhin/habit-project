import React, { Component } from "react";
// import PropTypes from "prop-types";
import HabitItem from "./HabitItem/HabitItem.js";
import Modal from "../Modal/Modal";
import HabbiForm from "./HabitForm/HabitForm";

// import {v4 }

export default class HabitsList extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    habits: [{ id: "", title: "зарядка", startDate: "", progress: "" }],
  };
  toAddHabit = (habit) => {
    this.setState((prevState) => ({
      habits: [...prevState.habits, habit],
    }));
  };

  toChangeProgress = (id) => {
    this.setState((prevState) => {
      const obj = prevState.habits.find((habit) => {
        return habit.id === id;
      });
      obj.progress = this.toSetProgress(obj.startDate);
      return obj;
    });
  };
  render() {
    const { habits } = this.state;
    return (
      <>
        <header>
          <div>My accaunt</div>
          <button type="button">Close</button>
        </header>
        {this.props.showModal && (
          <Modal modalToggle={this.props.modalToggle}>
            {/* <p>"Hello world"</p> */}
            <HabbiForm modalToggle={this.props.modalToggle} toAddHabit={this.toAddHabit} />
          </Modal>
        )}
        <div> Календарь </div>
        <h1>Мои привычки</h1>
        {this.state.habits.length ? (
          <ul>
            {habits.map((habit) => {
              return <HabitItem key={habit.id} progress="" title={habit.title} progress={habit.progress} />;
            })}
          </ul>
        ) : (
          <p>У вас пока нет привычек...</p>
        )}
        <button type="button" onClick={this.props.modalToggle}>
          +
        </button>
      </>
    );
  }
}
