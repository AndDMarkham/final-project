import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/index.scss';
import Home from './Home';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from "../history.js";
import Nav from "./Nav/Nav";
import DishForm from "./Dish/DishForm.js";
import ReviewForm from "./Review/ReviewForm.js";


const App = () =>  {
        return (
           <>
               <Router history={history}>
                    <div style={{width:'100vw', height: '100vh'}}>
                        <Nav/>
                        <div> 
                            <Switch>
                                    <Route path = '/' component={Home} />
                                    {/* <Route path = '/restaurantform' component={RestaurantForm} /> */}
                            </Switch>
                        </div>
                    </div>
                </Router>
            </>
        )
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));



{/* <div className="login">
        <Login/> 
    </div> */}