import React from "react";
import "./App.css";

// APP COMPONENT
function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Contact />
    </div>
  );
}

// START HEADER COMPONENT
function Header() {
  return (
    <header className="App-header">
      <h1 id="fab" className="App-title">
        FAB
      </h1>
      <h2 className="App-title">Properties</h2>
      <span className="owner">Owned and operated by Stephanie Jacobi</span>
    </header>
  );
}
// END HEADER COMPONENT

// START INFO COMPONENT
function Info() {
  return (
    <section className="info-container">
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Urna porttitor
        rhoncus dolor purus non enim praesent elementum facilisis. Tortor
        consequat id porta nibh. At varius vel pharetra vel. Scelerisque
        eleifend donec pretium vulputate sapien nec sagittis. Turpis tincidunt
        id aliquet risus feugiat in. Ultricies lacus sed turpis tincidunt id.
        Mauris augue neque gravida in fermentum et sollicitudin. Auctor elit sed
        vulputate mi sit amet mauris commodo quis. Aliquet nibh praesent
        tristique magna sit amet purus. Justo donec enim diam vulputate ut
        pharetra sit. Eu scelerisque felis imperdiet proin fermentum leo vel.
        Lacus sed viverra tellus in hac. Tortor consequat id porta nibh
        venenatis cras sed felis. Posuere morbi leo urna molestie at. Egestas
        egestas fringilla phasellus faucibus. Eget nunc scelerisque viverra
        mauris. Odio ut sem nulla pharetra diam. Nulla facilisi nullam vehicula
        ipsum a arcu cursus vitae congue. Imperdiet massa tincidunt nunc
        pulvinar sapien et. Convallis a cras semper auctor neque vitae tempus
        quam. Libero nunc consequat interdum varius sit amet. Dignissim cras
        tincidunt lobortis feugiat vivamus. In est ante in nibh mauris cursus
        mattis molestie a. Fermentum et sollicitudin ac orci phasellus egestas
        tellus rutrum. Enim sit amet venenatis urna. Eget mauris pharetra et
        ultrices neque ornare. Tortor vitae purus faucibus ornare suspendisse
        sed nisi lacus sed. Vitae proin sagittis nisl rhoncus. Fringilla est
        ullamcorper eget nulla facilisi.
      </article>
    </section>
  );
}
// END INFO COMPONENT

// START CONTACT FORM COMPONENT
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    fetch("http://localhost:3080/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  render() {
    return (
      <div className="contact-form-container">
        Get in touch
        <form className="contactForm" onSubmit={this.handleSubmit.bind(this)}>
          <label className="labels" htmlFor="nameInput">
            Name
          </label>
          <input
            name="nameInput"
            type="text"
            className="inputs"
            placeholder="First and Last name"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
            required
          />
          <label className="labels" htmlFor="emailInput">
            Email
          </label>
          <input
            name="emailInput"
            type="email"
            className="inputs"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onEmailChange.bind(this)}
            required
          />
          <label className="labels" htmlFor="messageInput">
            Message
          </label>
          <textarea
            name="messageInput"
            className="inputs"
            placeholder="Enter message"
            rows="5"
            cols="40"
            value={this.state.message}
            onChange={this.onMessageChange.bind(this)}
            required
          />
          <button type="submit" id="sendBtn">
            Send
          </button>
        </form>
        <div className="Contact-info">Links: airbnb, facebook</div>
      </div>
    );
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };
}
// END CONTACT FORM COMPONENT

export default App;
