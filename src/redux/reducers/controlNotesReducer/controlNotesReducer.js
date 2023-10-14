import initialState from "./initialState";
import ACTIONS from "./actions";

const controlNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_INPUT_VALUE:
      return {
        ...state,
        ...action.payload
      };

    case ACTIONS.ADD_NOTE:
      return {
        ...state,
        countId: state.countId + action.payload.countId,
        title: "",
        price: "",
        notes: [
          ...state.notes,
          {
            id: state.countId,
            title: action.payload.note.title,
            price: action.payload.note.price,
          },
        ],
      };

    case ACTIONS.SET_INDEX:
      return {
        ...state,
        index: action.payload,
      };

    case ACTIONS.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          return note.id === action.payload.id
            ? {
                ...note,
                title: action.payload.title,
                price: action.payload.price,
              }
            : note;
        }),
        title: "",
        price: "",
        index: null,
      };

    case ACTIONS.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== +action.payload.id),
        title: "",
        price: "",
        index: null,
      };

    default:
      return state;
  }
};

export default controlNotesReducer;
