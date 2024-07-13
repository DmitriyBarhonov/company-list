import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companiesReducer from "../entities/company-row/model/slice/companies-slice";

const rootReducer = combineReducers({
  companies: companiesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
