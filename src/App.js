import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebaseConfig from "./pages/firebaseConfig";
import Login from "./pages/login";
import Home from "./pages/home";

class App extends Component {
  constructor(props) {
    super(props);
    this.authListener = this.authListener.bind(this);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseConfig.auth().onAuthStateChanged(user => {
      console.log("user", user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.email);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
