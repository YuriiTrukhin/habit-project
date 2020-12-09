import React, { Component } from "react";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Modal from "../../Modal/Modal";
import HabbiForm from "../HabitForm/HabitForm";
import routes from "../../../routes";
import removeHabbit from "../../../redux/actions/habitActions";

export default class HabitProfile extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };
  toDelete = () => {
    console.log(this.props.id);
    removeHabbit(this.props.id);
  };
  render() {
    return (
      <>
        <header>
          <NavLink to={routes.HabitsList}>Назад</NavLink>
          <h2>Title</h2>
          <button
            type="button"
            //  onClick={this.props.modalToggle}
          >
            Править
          </button>
        </header>
        <div>
          {this.props.showModal && (
            <Modal modalToggle={this.props.modalToggle}>
              {/* <p>"Hello world"</p> */}
              <HabbiForm modalToggle={this.props.modalToggle} toAddHabit={this.toAddHabit} />
            </Modal>
          )}
        </div>
        <NavLink
          to={routes.HabitsList}
          //  onClick={this.props.modalToggle}
        >
          Удалить профайл
        </NavLink>
      </>
    );
  }
}
