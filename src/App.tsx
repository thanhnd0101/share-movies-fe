import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./modules/MainPage";
import PrivateRoute from "./routes/privateRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isAuthenticated =
    useSelector((state: any) => state.user.token).length > 0;
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
