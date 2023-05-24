import './App.css';
import { useSelector,useDispatch} from 'react-redux';
import { incNumb, decNumb  } from './actions';

function App() {
  const myState = useSelector((state)=> state.changeThenum);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h1> increment and decrement </h1>
  <button onClick={()=>{dispatch(decNumb())}}>-</button>
    <p>{myState}</p>
    <button onClick={()=>{dispatch(incNumb())}}>+</button> 
    </div>
  );
}

export default App;
