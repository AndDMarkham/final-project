import React from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from "../../history";
import RestaurantCard from '../Restaurant/RestaurantCard';

const sidebarStyle = {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
    height: '80vh',
    width: '44vw'
}
const Sidebar = props => {
    return (
        <div style={sidebarStyle}>
            <h3>Dishes near you!</h3>
            <div style={{margin: '1rem 0 1rem 0'}}>
                <h5>some info here</h5>
            </div>
            <Router history={history}>
                <Switch>
                    <Route path = '/' component={RestaurantCard} />
                </Switch>
            </Router>
        </div>
    )
}

export default Sidebar;