import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import GlobalStyles from "./styles/Global";
import Slideshow from './components/slideshow/SlideShow';
import Info from './components/Info';
import About from './components/About';
import Services from './components/Services';
import References from './components/References';

class App extends Component {

  constructor(props) {
    super(props)
    this.aboutSection = React.createRef();
    this.servicesSection = React.createRef();
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  scrollToContent(content) {

    switch (content) {
      case 'about':
        window.scrollTo({ top: this.aboutSection.current.offsetTop - 120, behavior: 'smooth' });
        break;
      case 'services1':
        window.scrollTo({ top: this.servicesSection.current.offsetTop - 120, behavior: 'smooth' });
        break;
      case 'services2':
        window.scrollTo({ top: this.servicesSection.current.offsetTop + 250, behavior: 'smooth' });
        break;
      case 'services3':
        window.scrollTo({ top: this.servicesSection.current.offsetTop + 755, behavior: 'smooth' });
        break;
      case 'services4':
        window.scrollTo({ top: this.servicesSection.current.offsetTop + 1520, behavior: 'smooth' });
        break;
    }
  }

  render() {

    return (
      <>
        <NavBar goTo={this.scrollToContent} />
        <Slideshow />
        <Info />
        <About ref={this.aboutSection} />
        <Services ref={this.servicesSection} />
        <References />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
