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
import CreateBusinessForm from "./components/BusinessForm";
import AllReviews from "./components/AllReviews";
import Splash from "./components/Splash";
import AllBars from "./components/Categories/bar";
import AllTea from "./components/Categories/tea";
import AllSmoothie from "./components/Categories/smoothie";
import AllBoba from "./components/Categories/boba";
import AllCoffee from "./components/Categories/coffee";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHome, setIsHome] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>

      <Navigation isLoaded={isLoaded} isHome={isHome} />
      <Switch>
        <Route exact path='/'>
          <Splash homeNav={()=> setIsHome(true)} />
        </Route>
        <Route exact path="/businesses">
          <AllBusinesses notHome={()=> setIsHome(false)} />
        </Route>
        <Route exact path='/businesses/new'>
          <CreateBusinessForm notHome={()=> setIsHome(false)}/>
        </Route>
        <Route exact path='/businesses/:businessId'>
          <BusinessDetail notHome={()=> setIsHome(false)}/>
          <AllReviews notHome={()=> setIsHome(false)}/>
        </Route>
        <Route exact path='/bars'>
          <AllBars notHome={()=> setIsHome(false)}/>
        </Route>
        <Route exact path='/coffee'>
          <AllCoffee notHome={()=> setIsHome(false)}/>
        </Route>
        <Route exact path='/smoothie'>
          <AllSmoothie notHome={()=> setIsHome(false)}/>
        </Route>
        <Route exact path='/tea'>
          <AllTea notHome={()=> setIsHome(false)}/>
        </Route>
        <Route exact path='/bubble-tea'>
          <AllBoba notHome={()=> setIsHome(false)}/>
        </Route>
      </Switch>
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage notHome={()=> setIsHome(false)}/>
          </Route>
          <Route exact path="/signup">
            <SignupFormPage notHome={()=> setIsHome(false)}/>
          </Route>

        </Switch>
      )}
      {/* <Route>Page not found</Route> */}
    </>
  );
}

export default App;
