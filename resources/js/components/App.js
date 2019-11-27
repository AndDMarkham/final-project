import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../../sass/index.scss';
import Home from './Home';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import history from "../history.js";
import Navigation from "./Nav/Navigation";
import Login from './Auth/Login';
import Register from './Auth/Register';
import LoginNav from './Nav/LoginNav';
import Search from './Search/Search';

const App = () =>  {
    const [ user, setUser ] = useState({
        loggedIn: false,
        token: '',
        user: {}
    });

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
                    <Switch>
                        <Route
                            exact={true}
                            path = '/'
                            render={() =>
                                <Home
                                    setUser={setUser} 
                                    user={user}
                                />
                            }
                        />
                        <Route
                            exact={true}
                            path = '/search'
                            render={() => 
                                <Search
                                setUser={setUser} 
                                user={user}
                                />
                            }
                        />
                    </Switch>
                    </div>
                </div>
            </HashRouter>
            </>
        )
    } return (
        <>
           <HashRouter>
                <div style={{width:'100vw', height: '100vh'}}>
                    <LoginNav />
                    <Switch>
                        <Route
                            exact={true} 
                            path='/'
                            render = {()=>    
                                <Login 
                                    setUser={setUser}
                                />
                            }
                        />  
                        <Route
                            exact={true} 
                            path='/register'
                            component={Register}
                        />  
                    </Switch>
                </div>
           </HashRouter>
        </>
    )
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));