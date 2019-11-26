import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../../sass/index.scss';
import Home from './Home';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import history from "../history.js";
import Navigation from "./Nav/Navigation";
import Login from './Auth/Login';
import Register from './Auth/Register';
import Profile from './Profile/Profile';

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
        const user = JSON.parse(window.localStorage.getItem('user'));
        if (token) {
            setUser({
                loggedIn: true,
                token: token,
                user: user
            })
        }
    }, []);


    if (user.loggedIn && user.token) {
        return (
            <>
            <HashRouter history={history}>
                <div style={{width:'100vw', height: '100vh'}}>
                    <Navigation/>
                    <div> 
                    <Home
                        setUser={setUser} 
                        user={user}
                    />
                    </div>
                </div>
            </HashRouter>
            </>
        )
    } return (
        <>
            <div style={{width:'100vw', height: '100vh'}}>
                <Login 
                setUser={setUser} 
                user={user}
                />
            </div>
        </>
    )
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));



{/* <div className="login">
        <Login/> 
    </div> */}