import initialState from "./initialState";
import ACTIONS from "./actions";

const filterNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FILTER_NOTES:
      return {
        ...state,
        filter: action.payload.filter,
        filterNotes: action.payload.newFilterNotes
      }

      case ACTIONS.SET_FILTER:
        return {
          ...state,
          filter: false,
          filterNotes: []
        }

    default:
      return state;
  }
};

export default filterNotesReducer;
