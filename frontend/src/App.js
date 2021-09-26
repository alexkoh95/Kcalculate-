import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Signup from "./components/SignupLogin/Signup";

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-br from-yellow-50 via-pink-50 to-indigo-100 h-screen">
        <main>
          <Switch>
            <Route path="/" exact component={Signup} />
            <Route
              path="/main"
              exact
              component={HomePage}
              className="mx-4 p-9 pl-64"
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
