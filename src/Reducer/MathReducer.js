const mathReducer = (state = {
result:0,
data:[]
}, action) => {
  switch (action.type) {
    case "Increment": {
      state = {
        ...state,
        result: state.result + 1,
        //data:[...state.data ,action.payload]
      }
      break;
    }
    }
  return state;
};
 export default mathReducer;
