import React, { lazy, Component, Suspense } from "react";
import "./App.css";
// import Autentification from "./components/Autentification/Autentification.js";
// import Loginization from "../src/components/Loginization/Loginization.js";
// import Registration from "../src/components/Registration/Registration.js";
// import Profile from "../src/components/Profile/Profile";
// import HabbiForm from "../src/components/HabitsList/HabitForm/HabitForm.js";
// import Modal from "../src/components/Modal/Modal";
import HabitsList from "../src/components/HabitsList/HabitsList";
import { Route } from "react-router-dom";
import routes from "./routes";
import ErrorBoundary from "./ErrorBoundary";
import HabitProfile from "./components/HabitsList/HabitProfile/HabitProfile";
import Context from "./context/Context";
import { Provider } from 'react-redux';

const AsynсAuthentification = lazy(() => import("./components/Autentification/Autentification.js"));
const AsynсRegistration = lazy(() => import("../src/components/Registration/Registration.js"));
const AsynсLoginization = lazy(() => import("../src/components/Loginization/Loginization.js"));
const AsynсProfile = lazy(() => import("../src/components/Profile/Profile"));
const AsynсHabitProfile = lazy(() => import("./components/HabitsList/HabitProfile/HabitProfile"));

export default class App extends Component {
  state = {
    showModal: false,
    users: [],
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  modalToggle = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
        <Context >
          <ErrorBoundary>
            <Suspense fallback={<h1>Load</h1>}>
              <Route path={routes.Authentification} exact component={AsynсAuthentification} />
              <Route path={routes.Loginization} exact component={AsynсLoginization} />
              <Route path={routes.Registration} exact component={AsynсRegistration} />
              <Route path={routes.Profile} exact component={AsynсProfile} />
              <Route
                path={routes.HabitsList}
                exact
                render={(props) => <HabitsList {...props} modalToggle={this.modalToggle} showModal={showModal} />}
              />
              <Route
                path={routes.HabitProfile}
                exact
                render={(props) => <HabitProfile {...props} modalToggle={this.modalToggle} showModal={showModal} />}
              />
            </Suspense>
          </ErrorBoundary>
        </Context>
      </>
    );
  }
}
