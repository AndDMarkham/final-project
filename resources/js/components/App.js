import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../../sass/index.scss';
import Home from './Home';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from "../history.js";
import Navigation from "./Nav/Navigation";
import Login from './Auth/Login';
import Register from './Auth/Register';

const App = () =>  {
    const [ user, setUser ] = useState({
        loggedIn: false,
        token: '',
        user: {}
    });

    const [ geoLoc, setGeoLoc ] = useState({
        lat: '',
        long: ''
    })

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            setUser({
                loggedIn: true,
                token: token
            })
        }
    }, []);


    if (user.loggedIn && user.token) {
        return (
            <>
            <Router history={history}>
                <div style={{width:'100vw', height: '100vh'}}>
                    <Navigation/>
                    <div> 
                        <Switch>
                                <Route 
                                    path = '/' 
                                    render={
                                        (props) => <Home {...props} 
                                            setUser={setUser} 
                                            user={user}
                                        />
                                    }
                                />
                                {/* <Route path = '/restaurantform' component={RestaurantForm} /> */}
                        </Switch>
                    </div>
                </div>
            </Router>
            </>
        )
    } return (
        <>
            <div style={{width:'100vw', height: '100vh'}}>
                <Login />
            </div>
        </>
    )
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));



{/* <div className="login">
        <Login/> 
    </div> */}