const controlNotesDispatches = {
  SET_INPUT_VALUE(dispatch, inputName, value) {
    let newValue = {};

    inputName === "all"
      ? (newValue = { ...value })
      : (newValue[inputName] = value);

    return dispatch({
      type: "SET_INPUT_VALUE",
      payload: newValue,
    });
  },

  ADD_NOTE(dispatch, title, price) {
    return dispatch({
      type: "ADD_NOTE",
      payload: {
        countId: 1,
        note: {
          title,
          price,
        },
      },
    });
  },

  SET_INDEX(dispatch, index) {
    return dispatch({
      type: "SET_INDEX",
      payload: index,
    });
  },

  EDIT_NOTE(dispatch, id, title, price) {
    return dispatch({
      type: "EDIT_NOTE",
      payload: {
        id,
        title,
        price,
      },
    });
  },

  DELETE_NOTE(dispatch, id) {
    return dispatch({
      type: "DELETE_NOTE",
      payload: {
        id,
      },
    });
  },
};

export default controlNotesDispatches;
