
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
     <div className="Contact-info">
      Email: steff.jacobi@gmail.com
      Links: airbnb, facebook,
     </div>
    </div>
  );
}

export default App;
