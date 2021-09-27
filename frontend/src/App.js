import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Main from "./components/SignupLogin/Main";
import SignIn from "./components/SignupLogin/Signin";
import SignUp from "./components/SignupLogin/Signup";
=======
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
>>>>>>> c61804c79b8e460615df07b78c8939b9867713d5

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-br from-yellow-50 via-pink-50 to-indigo-100 min-h-screen">
        <main>
          <Switch>
<<<<<<< HEAD
            <Route path="/" exact component={Main} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
=======
            <Route path="/" exact component={Signup} />
            <Route path="/main">
              <Redirect to="/dashboard"></Redirect>
            </Route>

            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/log" exact component={Log} />
            <Route path="/log/:id" exact component={EditLogModal} />
            <Route path="/log/delete/:id" exact component={Deletelog} />
            <Route path="/loghistory" exact component={History} />
>>>>>>> c61804c79b8e460615df07b78c8939b9867713d5
            <Route
              path="/loghistory/DailyInformationPage"
              exact
              component={DailyInformationPage}
            />
            <Route path="/settings" exact component={Settings} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
