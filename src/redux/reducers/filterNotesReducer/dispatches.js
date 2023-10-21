const filterNotesDispatches = {
  SET_FILTER(dispatch) {
    return dispatch({
      type: "SET_FILTER",
    });
  },

  FILTER_NOTES(dispatch, inputName, value, value2, notes) {
    let newFilterNotes, inputName2;

    if (inputName === "price") inputName2 = "title";
    else inputName2 = "price";

    if (value !== "" && value2 === "") {
      newFilterNotes = notes.filter((note) => {
        return note[inputName].toLowerCase().includes(value.toLowerCase());
      });
    } else if (value === "" && value2 !== "") {
      newFilterNotes = notes.filter((note) =>
        note[inputName2].toLowerCase().includes(value2.toLowerCase())
      );
    } else if (value !== "" && value2 !== "") {
      newFilterNotes = notes.filter((note) => {
        if (
          note[inputName].toLowerCase().includes(value.toLowerCase()) &&
          note[inputName2].toLowerCase().includes(value2.toLowerCase())
        ) {
          return note;
        }
      });
    } else {
      return this.SET_FILTER(dispatch);
    }

    return dispatch({
      type: "FILTER_NOTES",
      payload: {
        filter: true,
        newFilterNotes,
      },
    });
  },
};

export default filterNotesDispatches;
