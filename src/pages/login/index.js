import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import Paper from "material-ui/Paper";
import styles from "./style";
import firebaseConfig from "../firebaseConfig";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    // this.state = this.state.bind(this)
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value, errorMessage: "" });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value, errorMessage: "" });
  }

  login(event) {
    event.preventDefault();
    firebaseConfig
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log("error", error, typeof error, error.message);
        this.setState({ errorMessage: error.message });
      });
  }

  signUp(event) {
    event.preventDefault();
    firebaseConfig
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log("error", error, typeof error);
        this.setState({ errorMessage: error.message });
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper style={styles.paper}>
          <form>
            <div>
              <TextField
                style={styles.field}
                label="Email"
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required
              />
            </div>
            <div>
              <TextField
                style={styles.field}
                label="Password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                errorMessage={this.state.errorMessage}
                required
              />
            </div>
            <div style={styles.buttonWrapper}>
              <PrimaryButton
                type="submit"
                text="Sign Up"
                onClick={this.signUp}
                style={styles.signUpButton}
              />
              <PrimaryButton
                type="submit"
                text="Login"
                onClick={this.login}
                style={styles.loginButton}
              />
            </div>
          </form>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default LoginView;
