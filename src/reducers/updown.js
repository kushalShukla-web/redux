const InitialState = 10;

const changeThenum = (state= InitialState,action)=>{
    switch(action.type){
        case "INCREMENT" : return InitialState+1;
        case "DECREMENT" : return InitialState-1;
        default: return InitialState;
    }
}
export default changeThenum;