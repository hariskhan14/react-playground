// only Account reducer is required since we listen to a deposit Action and stores in a Store

//state is the intial state so the default balance is 0
//action represents an event
const reducer = (state = 0, action) => {
    switch(action.type) {
        case "DEPOSIT":
            return state + action.payload;   //adds the balance
        case "WITHDRAW":
            return state - action.payload;   //deducts the balance
        default:
            return state;                   //no change
    }
};

export default reducer;