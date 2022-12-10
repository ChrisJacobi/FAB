
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1  id="fab" className="App-title">FAB</h1>
      <h2 className="App-title">Properties</h2>
      <span className="owner">Owned and operated by Stephanie Jacobi</span>
    </header>
  );
}

function Contact() {
  return (
    <div className="Contact-form">
      Get in touch
      <Form />
     <div className="Contact-info">
      Links: airbnb, facebook
     </div>
    </div>
  );
}

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log()
  }
  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label className="labels" for="nameInput">Name</label>
        <input name="nameInput" type="text" className="inputs" placeholder="First and Last name" required />
      <label className="labels" for="emailInput">Email</label>
        <input name="emailInput" type="email" className="inputs" placeholder="Email" required />
      <label className="labels" for="messageInput">Message</label>
        <textarea name="messageInput" className="inputs" placeholder="Enter message" rows="5" cols="40" required ></textarea>
      <button type="submit" id="sendBtn">Send</button>
    </form>
  );
}

export default App;
