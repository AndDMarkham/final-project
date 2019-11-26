import React from 'react';
import { Button } from 'reactstrap';

const Profile = () => {
    return (
        <div className="profileDiv">
            <div className="profileIcons">
                <img src="/images/meat.png" alt="meat" className="profileIcon"></img>
                <img src="/images/icons8-no-mustard-80.png" alt="no mustard" className="profileIcon"></img>
                <img src="/images/icons8-peanut-80.png" alt="no peanuts" className="profileIcon"></img>
                <img src="/images/icons8-non-lactose-food-100.png" alt="no lactose" className="profileIcon"></img>
            </div>
            <div className="profileText">Hello, Ignacio!
            <Button color="link" className="dietaryRestrictionsLink">Check out the dishes suitable for your dietary restrictions!</Button>
            </div>
        </div>
    )
}
export default Profile;