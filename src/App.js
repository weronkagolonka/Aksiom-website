import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import GlobalStyles from "./styles/Global";

class App extends Component {

  state = {
    navbarOpen: false
  }

  //opposite
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <>
        <NavBar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
