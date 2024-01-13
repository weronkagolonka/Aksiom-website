import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import GlobalStyles from "./styles/Global";
import Slideshow from './components/slideshow/SlideShow';
import Info from './components/Info';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import emailjs from 'emailjs-com';
import Footer from './components/Footer';
import Awards from "./components/Awards";
class App extends Component {

  constructor(props) {
    super(props)
    this.aboutSection = React.createRef();
    this.servicesSection = React.createRef();
    this.contactSection = React.createRef();
    this.scrollToContent = this.scrollToContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
      navbarOpen: false,
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.email !== '' && this.state.message !== '') {
      const templateParams = {
        from_name: this.state.name,
        from_email: this.state.email,
        to_name: "biuro@aksiom.pl",
        feedback: this.state.message
      }

      emailjs.send("smtp_server", process.env.REACT_APP_EMAIL_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAIL_USER_ID).then(
        (result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        }
      );

      alert("Wiadomość wysłana");
      this.resetForm();
    } else {
      alert("Niekompletny formularz");
    }
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  scrollToContent(content) {

    let offset = 120;
    let serviceOffset = 120;

    if (this.state.navbarOpen) this.handleNavbar();

    if (window.innerHeight > 768) {
      offset = 190;
      serviceOffset = 270;
    }

    switch (content) {
      case 'about':
        window.scrollTo({ top: this.aboutSection.current.offsetTop - offset, behavior: 'smooth' });
        break;
      case 'accounting-services':
        window.scrollTo({ top: this.servicesSection.current.offsetTop - serviceOffset, behavior: 'smooth' });
        break;
      case 'contact':
        window.scrollTo({ top: this.contactSection.current.offsetTop - offset, behavior: 'smooth' });
        break;
      default:
    }
  }

  render() {

    return (
      <>
        <NavBar goTo={this.scrollToContent} navbarState={this.state.navbarOpen} handleNavbar={this.handleNavbar} />
        <Slideshow />
        <Info />
        <Awards />
        <About ref={this.aboutSection} />
        <Services ref={this.servicesSection} />
        <Contact
          ref={this.contactSection}
          submit={this.handleSubmit}
          setName={this.onNameChange}
          setEmail={this.onEmailChange}
          setMessage={this.onMessageChange}
          state={this.state} />
        <Footer />
        <GlobalStyles />
      </>
    );
  }
}
export default App;
