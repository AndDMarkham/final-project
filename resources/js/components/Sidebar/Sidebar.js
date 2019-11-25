import React from 'react';
import {Router, Route, Switch, Link, Redirect} from "react-router-dom";
import history from "../../history";
import RestaurantCard from '../Restaurant/RestaurantCard';

const Sidebar = props => {
    return (
        <div className="sidebar">
                <Link to ='/restaurantform'><h6>Or add a new restaurant</h6></Link>
            <Router history={history}>
                <Switch>
                    <Route 
                        path = '/' 
                        render= {
                            (props) => <RestaurantCard {...props} 
                                user={props.user}
                            />
                        }
                    />
                </Switch>
            </Router>
        </div>
    )
}

export default Sidebar;