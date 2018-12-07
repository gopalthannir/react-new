import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import firebaseConfig from "../firebaseConfig";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebaseConfig.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1> You are on home Page </h1>
        <MuiThemeProvider>
          <PrimaryButton text="Logout" type="submit" onClick={this.logout} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;
