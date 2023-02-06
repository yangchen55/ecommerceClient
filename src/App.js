import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          Example heading{' '}
          <i class="fa-solid fa-house"></i>
          <Button bg="secondary" as="Button">
            New
          </Button>
        </h1>
      </div>

    </div>
  );
}

export default App;
