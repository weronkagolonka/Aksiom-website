import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import GlobalStyles from "./styles/Global";
import Slideshow from "./components/slideshow/SlideShow";
import Info from "./components/Info";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import emailjs from "@emailjs/browser";
import Footer from "./components/Footer";
import Awards from "./components/Awards";
import { AffiliationPopup } from "./components/AffiliationPopup";
import { BankProducts } from "./components/BankProducts";
import { sections } from "./constants";

class App extends Component {
    constructor(props) {
        super(props);
        this.aboutSection = React.createRef();
        this.servicesSection = React.createRef();
        this.bankProductsSection = React.createRef();
        this.contactSection = React.createRef();
        this.scrollToContent = this.scrollToContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.state = {
            name: "",
            email: "",
            message: "",
            navbarOpen: false,
        };
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.email !== "" && this.state.message !== "") {
            const templateParams = {
                from_name: this.state.name,
                from_email: this.state.email,
                to_name: "biuro@aksiom.pl",
                feedback: this.state.message,
            };

            emailjs
                .send(
                    "smtp_server",
                    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                    templateParams,
                    import.meta.env.VITE_EMAIL_USER_ID
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
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
    };

    resetForm() {
        this.setState({ name: "", email: "", message: "" });
    }

    scrollToContent(content) {
        let offset = 120;
        let serviceOffset = 120;

        if (this.state.navbarOpen) this.handleNavbar();

        if (window.innerHeight > 768) {
            offset = 190;
            serviceOffset = 270;
        }
        console.log(content);

        switch (content) {
            case sections.ABOUT:
                window.scrollTo({
                    top: this.aboutSection.current.offsetTop - offset,
                    behavior: "smooth",
                });
                break;
            case sections.SERVICES:
                window.scrollTo({
                    top: this.servicesSection.current.offsetTop - serviceOffset,
                    behavior: "smooth",
                });
                break;
            case sections.CONTACT:
                window.scrollTo({
                    top: this.contactSection.current.offsetTop - offset,
                    behavior: "smooth",
                });
                break;
            case sections.BANK_PRODUCTS:
                window.scrollTo({
                    top: this.bankProductsSection.current.offsetTop - offset,
                    behavior: "smooth",
                });
            default:
        }
    }

    render() {
        return (
            <>
                <AffiliationPopup goTo={this.scrollToContent} />
                <NavBar
                    goTo={this.scrollToContent}
                    navbarState={this.state.navbarOpen}
                    handleNavbar={this.handleNavbar}
                />
                <Slideshow />
                <Info />
                <Awards />
                <About ref={this.aboutSection} />
                <Services ref={this.servicesSection} />
                <BankProducts ref={this.bankProductsSection} />
                <Contact
                    ref={this.contactSection}
                    submit={this.handleSubmit}
                    setName={this.onNameChange}
                    setEmail={this.onEmailChange}
                    setMessage={this.onMessageChange}
                    state={this.state}
                />
                <Footer />
                <GlobalStyles />
            </>
        );
    }
}
export default App;
