import { useDispatch, useSelector } from "react-redux";
import Note from "./components/Note";
import { useRef } from "react";
import controlNotesDispatches from "./redux/reducers/controlNotesReducer/dispatches";
import filterNotesDispatches from "./redux/reducers/filterNotesReducer/dispatches";

function App() {
  const cancelButton = useRef(null);

  const dispatch = useDispatch();

  const { title, price, notes, index } = useSelector(
    (state) => state.controlNotes
  );
  const { filter, filterNotes } = useSelector((state) => state.filterNotes);

  const setInputValueHandler = (event, dispatch, inputName, value2, notes) => {
    filterNotesDispatches.FILTER_NOTES(
      dispatch,
      inputName,
      event.target.value,
      value2,
      notes
    );

    controlNotesDispatches.SET_INPUT_VALUE(
      dispatch,
      inputName,
      event.target.value
    );
  };

  const addNoteHandler = (e) => {
    e.preventDefault();

    if (index === null) {
      controlNotesDispatches.ADD_NOTE(dispatch, title, price);
    } else {
      controlNotesDispatches.EDIT_NOTE(dispatch, notes[index].id, title, price);
    }

    filterNotesDispatches.SET_FILTER(dispatch);

    return cancelButton.current.classList.add("hide-btn");
  };

  const editNoteHandler = (e) => {
    const parent = e.target.closest("li");
    const [title, price] = parent.querySelectorAll("span");
    const index = notes.findIndex((note) => note.title === title.textContent);

    controlNotesDispatches.SET_INPUT_VALUE(dispatch, "all", {
      title: title.textContent,
      price: price.textContent,
    });

    controlNotesDispatches.SET_INDEX(dispatch, index);

    filterNotesDispatches.FILTER_NOTES(
      dispatch,
      "title",
      title.textContent,
      price.textContent,
      notes
    );

    return cancelButton.current.classList.remove("hide-btn");
  };

  const deleteNoteHandler = (e) => {
    e.preventDefault();

    const parent = e.target.closest("li"),
      _id = parent.attributes.getNamedItem("data-id").value;

    cancelButton.current.classList.add("hide-btn");

    return controlNotesDispatches.DELETE_NOTE(dispatch, _id);
  };

  const clearNoteHandler = (e) => {
    e.preventDefault();

    controlNotesDispatches.SET_INPUT_VALUE(dispatch, "all", {
      title: "",
      price: "",
    });

    filterNotesDispatches.SET_FILTER(dispatch);

    return cancelButton.current.classList.add("hide-btn");
  };

  return (
    <>
      <form name="add-notes" className="form-add-notes">
        <input
          type="text"
          className="note-title"
          value={title}
          onChange={(event) =>
            setInputValueHandler(event, dispatch, "title", price, notes)
          }
        />

        <input
          type="text"
          className="note-price"
          value={price}
          onChange={(event) =>
            setInputValueHandler(event, dispatch, "price", title, notes)
          }
        />

        <button className="btn-save" onClick={addNoteHandler}>
          Save
        </button>

        <button
          className="btn-cancel hide-btn"
          ref={cancelButton}
          onClick={clearNoteHandler}
        >
          Cancel
        </button>
      </form>

      <ul className="notes-list">
        {!filter
          ? notes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                price={note.price}
                handlersBtn={{
                  edit: editNoteHandler,
                  delete: deleteNoteHandler,
                }}
              />
            ))
          : filterNotes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                price={note.price}
                handlersBtn={{
                  edit: editNoteHandler,
                  delete: deleteNoteHandler,
                }}
              />
            ))}
      </ul>
    </>
  );
}

export default App;
