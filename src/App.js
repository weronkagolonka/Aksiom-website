import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import GlobalStyles from "./styles/Global";
import Slideshow from './components/slideshow/SlideShow';
import Info from './components/Info';
import About from './components/About';
import Services from './components/Services';
import References from './components/References';

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
        <Slideshow />
        <Info />
        <About />
        <Services />
        <References />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
