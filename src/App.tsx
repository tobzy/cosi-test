import React from 'react';
import './App.css';
import Welcome from "./screens/Welcome";
import EnterDetails from "./screens/EnterDetails";
import Success from "./screens/Success";
import {createBrowserHistory} from 'history';
import {
    Router,
    Redirect,
    Route,
    withRouter
} from "react-router-dom";
import {connect} from "react-redux";


export const history = createBrowserHistory();

type Props = {
    user: any;
};

function App(props: Props) {

    let componentProps = {...props}
    const authCheck = (Component:any, props:object) => {
        if (componentProps.user.name) {
            return <Component {...props} />
        }
        return <Redirect to='/' />
    }

    return (
        <div className="App">
            <Router history={history}>
                <section className="container">
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/enter-details" render={(props:object) => authCheck(EnterDetails, props)} />
                    <Route exact path="/success" render={(props:object) => authCheck(Success, props)} />
                </section>
            </Router>
        </div>
    );
}


const mapStateToProps = (store: {user:object}) => {
    return {
        user: store.user || {}
    }
}
const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
