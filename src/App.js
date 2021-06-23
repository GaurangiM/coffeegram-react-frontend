import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyCafes from "./pages/MyCafes/MyCafes";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import CafeDetailsPage from "./pages/CafeDetailsPage/CafeDetailsPage"
import PostNewCafe from "./pages/PostNewCafe/PostNewCafe";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectToken } from "./store/user/selectors";



function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <div className="appContainer">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={AboutUsPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/cafes/:cafeId" component={CafeDetailsPage} />
          {token ? <Route path="/postcafe" component={PostNewCafe} /> : 
                  <PageNotFound message="Hey Coffeeholic, be a part of our community by signing up and add some cool cafes to our list !"/>}
          {token ? <Route path="/mycafes" component={MyCafes}/> :
                    <PageNotFound message="Hey Coffeeholic, be a part of our community by signing up and add some cool cafes to our list !"/>}
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
