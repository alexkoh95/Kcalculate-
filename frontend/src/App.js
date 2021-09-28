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
// import Settings from "./components/Settings/Settings";
import EditLogModal from "./components/Log/EditLogModal";
import Deletelog from "./components/Log/Deletelog";
import DailyInformationPage from "./components/LogHistory/DailyInformationPage";
import Main from "./components/SignupLogin/Main";
import SignIn from "./components/SignupLogin/Signin";
import SignupNext from "./components/SignupLogin/SignupNext";
import SettingsPage from "./components/Settings/SettingsPage";

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-br from-yellow-50 via-pink-50 to-indigo-100 min-h-screen">
        <main>
          <Switch>
            <Route path="/main">
              <Redirect to="/dashboard"></Redirect>
            </Route>

            <Route path="/" exact component={Main} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/signupnext" exact component={SignupNext} />

            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/log" exact component={Log} />
            <Route path="/log/:id" exact component={EditLogModal} />
            <Route path="/log/delete/:id" exact component={Deletelog} />
            <Route path="/loghistory" exact component={History} />
            <Route
              path="/loghistory/DailyInformationPage/:date"
              exact
              component={DailyInformationPage}
            />
            <Route path="/settings" exact component={SettingsPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
