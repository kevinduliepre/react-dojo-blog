import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navigation from './components/Navigation'
import BlogDetails from './components/BlogDetails'

// Pages
import Home from './components/pages/Home'
import Create from './components/pages/Create'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import NotFound from './components/pages/NotFound'

const App = () => {

  return (
    <Router>
      <div className="app">

        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
    
  )
}

export default App
 