import { Action } from "redux";
import { ActionTypes } from "./action-types";

export type Keys =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

export interface IContact {
  isRight?: boolean;
  name: {
    first: string;
    last: string;
    title: string;
  };
  location: {
    street: {
      name: string;
      number: number;
    };
    city: string;
    state: string;
    postcode: number;
    country: string;
    coordinates: {
      latitude: string;
      longitude: string;
    },
    timezone: {
      offset: string;
      description: string;
    }
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    thumbnail: string;
    medium: string;
  };
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };

}

export type IContactsList = { [key in Keys]: IContact[] };

export interface IContactListReducer {
  loading: boolean;
  contacts: IContactsList;
  error: boolean;
}

interface IFetchContactsList extends Action<string> {
  type: ActionTypes.FETCH_CONTACTS_PENDING;
}
interface IFetchContactsListSuccess extends Action<string> {
  type: ActionTypes.FETCH_CONTACTS_SUCCESSFUL;
  payload: IContactsList;
}
interface IFetchContactsListFail extends Action<string> {
  type: ActionTypes.FETCH_CONTACTS_FAILED;
  payload: string;
}

export type ActionModel =
  | IFetchContactsList
  | IFetchContactsListSuccess
  | IFetchContactsListFail;
