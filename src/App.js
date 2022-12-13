import { Route, Switch } from "react-router-dom";
import React from "react";
import Complete from "./pages/Complete";
import Home from "./pages/Home";
import Aim from "./pages/Aim";
import Alcollection from "./pages/AlCollection";
import Contact from "./pages/Contact";
import HandmadeCollection from "./pages/HandmadeCollection";
import Register from "./pages/Register";
import NewUserPage from "./components/Helper/Register/NewUser";
import Layout from "./components/layout/Layout";
import PageNotFound from "./components/Helper/PageNotFound/PageNotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Complete />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/aim" exact>
          <Aim />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/handmadeCollection" exact>
          <HandmadeCollection />
        </Route>
        <Route path="/alCollection" exact>
          <Alcollection />
        </Route>
        <Route path="/community" exact>
          <Contact />
        </Route>
        <Route path="/registerForm" exact>
          <NewUserPage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
