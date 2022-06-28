// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import AllBusinesses from "./components/AllBusinesses";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import BusinessDetail from "./components/BusinessDetail";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/businesses">
            <AllBusinesses />
          </Route>
          <Route exact path='/businesses/:businessId'>
            <BusinessDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
