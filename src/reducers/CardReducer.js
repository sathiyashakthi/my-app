const CardReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CARD':
          return state.concat([action.data]);
        default:
          return state;
      }
    }
    
export default CardReducer;