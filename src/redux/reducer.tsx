import { Reducer } from "redux";
import { ActionTypes } from "./action-types";
import { ActionModel, IContactListReducer } from "./types";

export const initialState: IContactListReducer = {
  loading: false,
  contacts: {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: [],
  },
  error: false,
};

export const contactListReducer: Reducer<IContactListReducer> = (
  state: IContactListReducer = initialState,
  action: ActionModel
) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONTACTS_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.FETCH_CONTACTS_SUCCESSFUL:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
        error: false,
      };
    case ActionTypes.FETCH_CONTACTS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return {
        ...state,
      };
  }
};
