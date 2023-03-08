import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";

function App() {

  const currentAccountState = useSelector((state) => state.account); //goes to Store which have all the states, and return the current State
  console.log(currentAccountState);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
