import React, {useState} from 'react';
import { Button } from 'reactstrap';

const dietPicture = {
    keto: 'meat.png',
    peanuts: 'icons8-peanut-80.png'
}

const Profile = props => {
    console.log('profile', props)
    let shownDiets = [];
    props.user.user.diets.forEach(diet => {
        shownDiets.push(diet.name)
    })
    console.log(shownDiets)
    //const [shownDiets, setShownDiets] = useState([]);

    let diets = [];
    for (let slug in dietPicture) {
        if (-1 !== shownDiets.indexOf(slug)) {
            diets.push({
                name: slug,
                picture: dietPicture[slug]
            })
        }
    }
console.log(diets);

    return (
        <div className="profileDiv">
            <div className="profileIcons">
                {
                    diets.map(diet => (
                        <img src={ `/images/${diet.picture}` } alt={ diet.name } className="profileIcon"></img>
                    ))
                }
                
                {/* <img src="/images/icons8-no-mustard-80.png" alt="no mustard" className="profileIcon"></img>
                <img src="/images/icons8-peanut-80.png" alt="no peanuts" className="profileIcon"></img>
                <img src="/images/icons8-non-lactose-food-100.png" alt="no lactose" className="profileIcon"></img> */}
            </div>
            <div className="profileText">Hello, {props.user.user.first_name}!
            <Button color="link" className="dietaryRestrictionsLink">Check out the dishes suitable for your dietary restrictions!</Button>
            </div>
        </div>
    )
}
export default Profile;