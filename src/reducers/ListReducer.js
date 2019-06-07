const ListReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LIST':
          return state.concat([action.data]);
          case 'DELETE_POST':
          return state.filter((list)=>list.id !== action.id)
        default:
          return state;
      }
    }
    

export default ListReducer;