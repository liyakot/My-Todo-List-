import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../components/TodosSlice";

const store = configureStore({
  reducer: reducer,
});

export default store;
