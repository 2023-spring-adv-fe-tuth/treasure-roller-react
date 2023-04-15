import './App.css';

const HomeScreen = () => (
  <>
    <h1>Show Me</h1>
    <h2>Works?</h2>
    <button className="btn">
      this button appears
    </button>
  </>
);

function App() {
  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
