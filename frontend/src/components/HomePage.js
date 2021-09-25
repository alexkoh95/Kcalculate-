import React from 'react'
import SideNavBar from '../components/SideNavBar';
import Dashboard from '../components/Dashboard/Dashboard';
import Log from '../components/Log/Log';
import History from '../components/LogHistory/History';
import Settings from '../components/Settings/Settings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const HomePage = () => {
    return (
        <Router>
    <div className="App">
      <div className=""><SideNavBar /></div>
      <main className="mx-4 p-9 pl-64">          
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/log" exact component={Log} />
            <Route path="/loghistory" exact component={History} />
            <Route path="/settings" exact component={Settings} />

          </Switch>

      </main>
      </div>
      </Router>
    )
}

export default HomePage
