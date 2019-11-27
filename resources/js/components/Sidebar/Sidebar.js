import React, {useEffect} from 'react';
import {HashRouter, Route, Switch, Link, Redirect} from "react-router-dom";
import history from "../../history";
import Profile from '../Profile/Profile'
import RestaurantCard from '../Restaurant/RestaurantCard';

const Sidebar = props => {
    console.log('sidebar component')
    console.log('sidebar props', props)
    useEffect(() => {
        // props.handleLatitude();

    }, [])
    return (
        <div className="sidebar">
                {/* <Link to ='/restaurantform'><h6>Or add a new restaurant</h6></Link> */}
            <HashRouter history={history}>
                {/* <SidebarNav /> */}
                <Switch>
                    <Route
                        // exact={true} 
                        path = '/' 
                        render= {
                            () => <RestaurantCard {...props}
                                setRestaurantId={props.setRestaurantId}
                                handleRestCoords={props.setRestCoords}
                                user={props.user}
                            />
                        }
                    />
                    <Route 

                        path = '/profile' 
                        render= {
                            () => <Profile {...props} 
                                user={props.user}
                            />
                        }
                    />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Sidebar;