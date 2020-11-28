import React, { Component } from "react";
import "./App.css";
import Autentification from "./components/Autentification/Autentification.js";
import Loginization from "../src/components/Loginization/Loginization.js";
import Registration from "../src/components/Registration/Registration.js";
import Profile from "../src/components/Profile/Profile";
import HabbiForm from "../src/components/HabitsList/HabitForm/HabitForm.js";
import Modal from "../src/components/Modal/Modal";
import HabitsList from "../src/components/HabitsList/HabitsList";

export default class App extends Component {
  state = {
    showModal: false,
  };
  modalToggle = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>

        <Autentification />
        <Loginization />
        <Registration />
        <Profile />
        <HabitsList modalToggle={this.modalToggle} showModal={showModal}/>
      </>
    );
  }
}
