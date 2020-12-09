import React, { Component, createContext } from "react";

const Context = createContext();
const fetchedUser = {
  email: "dslfjslkfj@gmail.com",
  id: 1,
  name: "Mango",
  phone: 309039994,
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeS9qhRY8m3uQ5fNWdIKzjj_Cjb2O7JLAmA&usqp=CAU",
  habits: [
    {
      id: 1,
      title: "pol",
      comment: "no",
      repeat: "every day",
      color: "#FF7E00",
      remind: false,
      progress: "10%",
    },
  ],
};

class UserContext extends Component {
  static Consumer = Context.Consumer;
  handleLogin = () => {
    this.setState({
      user: fetchedUser,
      isLogin: true,
    });
  };
  handleLogOut = () => {
    this.setState({
      user: null,
      isLogin: false,
    });
  };
  state = {
    user: fetchedUser,
    isLogin: false,
    handleLogin: this.handleLogin,
    handleLogOut: this.handleLogOut,
  };
  render() {
    return (
      <>
        <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
      </>
    );
  }
}
export default UserContext;
