import React, { Component } from "react";
// import PropTypes from "prop-types";
import HabitItem from "./HabitItem/HabitItem.js";
import Modal from "../Modal/Modal";
import HabbiForm from "./HabitForm/HabitForm";
import { Link } from "react-router-dom";
import routes from "../../routes";
import Context from "../../context/Context";
import UserContext from "../../context/Context";
import withContext from "../../components/hoc/withContext";
import { connect } from "react-redux";
import getState from "redux";
import store from "../../redux/store";
import removeHabbit from "../../redux/actions/habitActions";

// import {v4 }

class HabitsList extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    habits: [{ id: "", title: "зарядка", startDate: "", progress: "" }],
  };
  componentDidMount() {
    const array = JSON.parse(localStorage.getItem("state")) || [];
    this.setState({ habits: array });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) localStorage.setItem("state", JSON.stringify(this.state.habits));
  }
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
    const habits = store.getState().habits;
    console.log(store);
    const user = store.getState();
    return (
      // <UserContext.Consumer>
      //   {({ user }) => {
      //     return (
      <>
        <header>
          <div>My accaunt</div>
          <img src={user.avatar} alt={user.name} />
          <Link to="/" className="link">
            Назад
          </Link>
        </header>
        {this.props.showModal && (
          <Modal modalToggle={this.props.modalToggle}>
            {/* <p>"Hello world"</p> */}
            <HabbiForm modalToggle={this.props.modalToggle} toAddHabit={this.toAddHabit} />
          </Modal>
        )}
        <div> Календарь </div>
        <h1>Мои привычки</h1>
        {user.habits.length ? (
          <ul>
            {user.habits.map((habit) => {
              return (
                <Link key={habit.id} to={`${routes.HabitsList}/${habit.id}`}>
                  <HabitItem
                    progress=""
                    title={habit.title}
                    //  progress={habit.progress}
                    id={habit.id}
                  />
                </Link>
              );
            })}
          </ul>
        ) : (
          <p>У вас пока нет привычек...</p>
        )}
        <button type="button" onClick={this.props.modalToggle}>
          +
        </button>
      </>
      //     );
      //   }}
      // </UserContext.Consumer>
    );
  }
}
const mapStateToProps = (state) => ({
  habbits: state.habits,
});
const mapDispatchToProps = { removeHabbit: removeHabbit };

export default connect(mapStateToProps, mapDispatchToProps)(HabitsList);
