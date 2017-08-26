const todo = (state, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return {
      id: action.id,
      text: action.text,
    };
  case 'EDIT_TODO':
    if (state.id !== action.id) {
      return state;
    }

    return {
      id: action.id,
      text: action.text,
    };
  case 'DELETE_TODO':
    return state.id !== action.id;
  default:
    return state;
  }
};

/* exporting below todos; it is using above todo internally */
const todos = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      todo(undefined, action),
    ];
  case 'EDIT_TODO':
    return state.map(
      each => todo(each, action)
    );
  case 'DELETE_TODO':
    return state.filter(each => todo(each, action));
  default:
    return state;
  }
};

export default todos;
