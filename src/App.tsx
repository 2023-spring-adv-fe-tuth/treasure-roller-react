import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

const HomeScreen = () => (
  <>
    <h1>Show Me</h1>
    <h2>Works?</h2>
    <Button variant="success">
      this button appears
    </Button>
    <Card>
      <Card.Header>
        Leaderboard
      </Card.Header>
      <Card.Body>
        This stuff
      </Card.Body>
    </Card>
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
