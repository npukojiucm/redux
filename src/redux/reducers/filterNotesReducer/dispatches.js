const filterNotesDispatches = {
  SET_FILTER(dispatch) {
    return dispatch({
      type: "SET_FILTER",
    });
  },
  FILTER_NOTES(dispatch, inputName, value, value2, notes) {
    let newFilterNotes, inputName2;

    let regexp = new RegExp(value, "gmi");
    let regexp2 = new RegExp(value2, "gmi");

    if (inputName === "price") inputName2 = "title";
    else inputName2 = "price";

    if (value !== "" && value2 === "") {
      newFilterNotes = notes.filter((note) => regexp.test(note[inputName]));

    } else if (value === "" && value2 !== "") {
      newFilterNotes = notes.filter((note) => regexp2.test(note[inputName2]));

    } else if (value !== "" && value2 !== "") {
      newFilterNotes = notes.filter(
        (note) => regexp.test(note[inputName]) && regexp2.test(note[inputName2])
      );
      
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
