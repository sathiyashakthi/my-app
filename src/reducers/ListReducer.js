const ListReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LIST':
          return state.concat([action.data]);
        default:
          return state;
      }
    }
    

export default ListReducer;