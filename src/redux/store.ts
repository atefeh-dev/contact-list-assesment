import { combineReducers, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { contactListReducer } from "./reducer";
import { IContactListReducer } from "./types";

export interface IApplicationState {
  ContactListReducer: IContactListReducer;
}

export type DispatcherType = ThunkDispatch<
  IApplicationState,
  unknown,
  AnyAction
>;
export type AppAction<T> = (
  dispatch: (action: T) => void,
  getState: () => IApplicationState
) => void;

const reducers = combineReducers({
  ContactListReducer: contactListReducer,
});

export const store = configureStore({ reducer: reducers });
