import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

const HomeScreen = () => (
  <>
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
      <h1>Welcome to the Treasure Roller</h1>
      <HomeScreen />
    </div>
  );
}

export default App;
