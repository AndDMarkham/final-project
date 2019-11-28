import React, { useState, useEffect, useRef } from 'react';
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
import smoothscroll from 'smoothscroll-polyfill';
 
// kick off the polyfill!
smoothscroll.polyfill();

const scrollToRef = (ref) => window.scrollTo(0, ref.current)

const App = () =>  {
    const [ user, setUser ] = useState({
        loggedIn: false,
        token: '',
        user: {}
    });

    const mapRef = useRef(null);
    const executeScroll = () => scrollToRef(mapRef)

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const user = JSON.parse(window.localStorage.getItem('user'));
        if (token && user) {
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
                <div style={{width:'100vw', minHeight: '100vh'}}>
                    <Navigation
                        setUser={setUser} 
                        user={user}
                    />
                    <div> 
                    <Switch>
                        <Route
                            path = '/'
                            render={() =>
                                <Home
                                    setUser={setUser} 
                                    user={user}
                                    mapRef={mapRef}
                                    executeScroll={executeScroll}
                                />
                            }
                        />
                        <Route
                            
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
                                    user={user}
                                    setUser={setUser}
                                />
                            }
                        />  
                        <Route
                            exact={true} 
                            path='/register'
                            render = {()=>    
                                <Register 
                                    user={user}
                                    setUser={setUser}
                                />
                            }
                        />  
                    </Switch>
                </div>
           </HashRouter>
        </>
    )
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));