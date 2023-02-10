import { groupByFirstLetter } from "../utils/helpers";
import { AppAction } from "./store";
import { ActionTypes } from "./action-types";
import { ActionModel } from "./types";
import { getContactsApi } from "../services/getContactsApi";

export function fetchContacts(): AppAction<ActionModel> {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.FETCH_CONTACTS_PENDING });
      const res = await getContactsApi();

      if (res.results !== undefined) {
        dispatch({
          type: ActionTypes.FETCH_CONTACTS_SUCCESSFUL,
          payload: groupByFirstLetter(res.results),
        });
      } else {
        dispatch({
          type: ActionTypes.FETCH_CONTACTS_FAILED,
          payload: 'UnKnown error',
        });
      }
    } catch (error: any) {
      dispatch({
        type: ActionTypes.FETCH_CONTACTS_FAILED,
        payload: error.error,
      });
    }
  };
}
