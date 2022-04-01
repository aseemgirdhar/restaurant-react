import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./login/login";
import Signup from "./signup/signup";

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Signup} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </Router>
    )
}

export default Routing;