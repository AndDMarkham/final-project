import React from 'react';
import {Button} from 'reactstrap';

const Searchbar = () => {
    return (
        <div>
            <div className="searchbar">
            <label>Find out if your favourite restaurant has some delicious food for you!</label>
            <input type="text" name="restaurantSearch" placeholder="name of the restaurant"/>
            </div>
            <Button className="btnSearch">Search</Button>
        </div>
    )
}
export default Searchbar;