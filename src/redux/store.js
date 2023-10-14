import { combineReducers, compose, legacy_createStore } from "@reduxjs/toolkit";
import controlNotesReducer from "./reducers/controlNotesReducer/controlNotesReducer"
import filterNotesReducer from "./reducers/filterNotesReducer/filterNotesReducer";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      controlNotes: controlNotesReducer,
      filterNotes: filterNotesReducer,
    }),
    compose(ReactReduxDevTools),
  );
}

export default configureStore;
