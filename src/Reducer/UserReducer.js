const userReducer = (state = {
name:"MAX",
data:[]
},action)=>{
  switch (action.type) {
    case "SET_NAME":
    state = {
          ...state,
          name: action.payload,
         //data:[...state.data ,action.payload]
    }
      break;
}
return state;
  };

export default userReducer; 
