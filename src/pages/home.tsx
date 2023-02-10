import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DispatcherType, IApplicationState } from "../redux/store";
import { fetchContacts } from "../redux/actions";
import PreLoader from "../components/pre-loader/pre-loader";
import Header from "../components/header/header";
import Tabs from "../components/tabs/tabs";

function Home() {
  const { loading, error, contacts } = useSelector(
    (store: IApplicationState) => store.ContactListReducer
  );
  const dispatch: DispatcherType = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      {loading && <PreLoader />}
      {error && (
        <div className="container__error">
          <p>something went wrong!</p>
          <button
            data-testid="try_again"
            className="container__error--btn"
            onClick={() => dispatch(fetchContacts())}
          >
            Try again
          </button>
        </div>
      )}
      {!error && !loading && <Tabs contacts={contacts} />}
    </div>
  );
}

export default Home;
