

function App() {
  return (
    <>
       <Navbar />

      <Header />
      <div className="main-container">
        <h1>Vite + React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <Button />
      </div>
      
    </>
  );
}

export default App;

function Button() {
  return (
    <button className="btn">
      Click me
    </button>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>smadi</h1>
    </header>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}