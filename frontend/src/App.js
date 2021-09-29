import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Signup from "./components/SignupLogin/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Log from "./components/Log/Log";
import History from "./components/LogHistory/History";
import Settings from "./components/Settings/Settings";
import EditLogModal from "./components/Log/EditLogModal";
import Deletelog from "./components/Log/Deletelog";
import DailyInformationPage from "./components/LogHistory/DailyInformationPage";
import Main from "./components/SignupLogin/Main";
import SignIn from "./components/SignupLogin/Signin";
import SignupNext from "./components/SignupLogin/SignupNext";
import SettingsPage from "./components/Settings/SettingsPage";

// Josiah notes:
// done -- add props to sign-in props={ }
// done -- add 2 states, pass them to sign-in
// done -- private router wrap up member pages
// add logout component/function force auth state to be false
// userState to be null after logout

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const handleChange = async (userData) => {
    // console.log("App userdata: ", userData)
    setAuth(true)
    await setUser(userData)
    // console.log("inside auth :", auth)
    // console.log("inside user :", user)

  }
  // console.log("outside auth :", auth)
  // console.log("outside user :", user)

  // NEED TO PROPS AND CALL THIS ALONG NAV BAR
  const handleLogout = () => {
    setAuth(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="App bg-gradient-to-br from-yellow-50 via-pink-50 to-indigo-100 min-h-screen">
        <main>
          <Switch>
            <Route path="/main">
              <Redirect to="/dashboard"></Redirect>
            </Route>

            <Route path="/" exact component={Main} />
            {/*} <Route path="/signin" props={handleChange} exact component={SignIn} /> */}
            <Route path="/signin" exact>
              <SignIn handleChange={handleChange} />
            </Route>

            <Route path="/signup" exact component={Signup} />
            <Route path="/signupnext" exact component={SignupNext} />


            {/* 7 private routes, auth{auth} */}
            {/* components use capital C */}
            {/* uncomment PrivateRoute function right at the bottom */}
            <Route

              path="/dashboard"
              exact
              component={Dashboard}
            />
            {/* <Route
             
              path="/dashboard"
              exact
              Component={Dashboard}
            /> */}

            <Route path="/log" component={Log} exact />
            {/*}  <Route path="/log" exact component={Log} /> */}

            <Route path="/log/:id" exact component={EditLogModal} />
            <Route path="/log/delete/:id" exact component={Deletelog} />
            <Route path="/loghistory" exact component={History} />
            <Route path="/loghistory/DailyInformationPage/:date" exact component={DailyInformationPage} />
            <Route user={user} path="/settings" exact component={SettingsPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

// function PrivateRoute({ auth, Component, path, location, ...rest }) {
//   //if auth is true then show Route else redirect to login
//   return (
//     <>
//       {auth ? (
//         <Route path={path}>
//           <Component {...rest} />
//         </Route>
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/",
//             state: { from: location },
//           }}
//         />
//       )}
//     </>
//   );
// }

export default App;
