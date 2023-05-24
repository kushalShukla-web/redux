import { legacy_createStore as createStore} from 'redux'
import rootReducer from "./reducers/index.js"
console.log(rootReducer)
const store = createStore(rootReducer);
export default store;
// const changeThenum = (state= InitialState,action)=>{
//     switch(action.type){
//         case "INCREMENT" : return InitialState+1;
//         case "DECREMENT" : return InitialState-1;
//         default: return InitialState;
//     }
// }
