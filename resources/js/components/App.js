import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/index.scss';
import Home from './Home';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from "../history.js";
import Navv from "./Nav/Nav";

const App = () =>  {
        return (
<<<<<<< HEAD
           <>
               <Router history={history}>
                    <div style={{width:'100vw', height: '100vh'}}>
                        <Nav/>
                        <div> 
                            <Switch>
                                    <Route path = '/' component={Home} />
                                    {/* <Route path = '/restaurantform' component={RestaurantForm} /> */}
                            </Switch>
=======
           <div className="bgWhite"> 
                   <Router history={history}>
                        <div>
                            <Navv/>
                            <div> 
                                <Switch>
                                        <Route path = '/' component={Home} />
                                        {/* <Route path = '/restaurantform' component={RestaurantForm} /> */}
                                </Switch>
                            </div>
>>>>>>> hel
                        </div>
                    </Router>
               {/* </div> */}
            </div>
        )
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));



{/* <div className="login">
        <Login/> 
    </div> */}