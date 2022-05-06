import './App.css';
import Navbar from "./navbar.js"
import Text from "./text.js"
import BackGround from './background.js';

function App() {
  return (
    <div className="grid" >
    <Navbar />
    <BackGround />
    <Text />
    </div>
  );
}

export default App;
