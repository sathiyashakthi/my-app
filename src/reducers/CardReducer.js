const CardReducer = (state = [], action) => {
    debugger;
    switch(action.type) {
        case 'ADD_CARD':
          return state.concat([action.data]);
        default:
          return state;
      }
    }
    
export default CardReducer;