import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {

  const currentAccountState = useSelector((state) => state.account); //goes to Store which have all the states, and return the current State
  //also it keeps the value updated on the UI
  console.log("intial state", currentAccountState);

  const dispatch = useDispatch();
  
  const actions = bindActionCreators(actionCreators, dispatch);
  console.log("depositFunc", actions.depositMoney);
  console.log("withdrawMoney", actions.withdrawyMoney);
  
  return (
    <div className="App">
      <h1>{currentAccountState}</h1>
      <button onClick={() => actions.depositMoney(1000)}>Deposit</button>
      <button onClick={() => actions.withdrawyMoney(1000)}>Withdraw</button>
      {/* these methods "dispatch" an action, reducer see them and perform those actions */}
    </div>
  );
}

export default App;
