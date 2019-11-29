import React, { useState, useEffect } from "react"
import axios from "axios";
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

const dietMap = {
    vegan: 1,
    vegetarian: 2,
    pescetarian: 3,
    keto: 4,
    halal: 5,
    kosher: 6,
    gluten: 7,
    milk: 8,
    soy: 9,
    eggs: 10,
    peanuts: 11,
    treenuts: 12,
    fish: 13,
    molluscs: 14,
    crustaceans: 15,
    mustard: 16,
    sesame: 17,
    celery: 18,
    lupin: 19,
    sulphites: 20,
}

const dietNames = Object.keys(dietMap);

const getDietIds = (diets) => Object.keys(diets).reduce((acc, dietName) => {
        if(diets[dietName]) acc.push(dietMap[dietName])
        return acc
    }, [])

const Register = props => {
    const { user } = props;
    const [formInputValues, setFormInputValues] = useState({firstName: '', lastName: '', email: '', password: '', dateOfBirth: '', diets:{
        vegan: false,
        vegetarian: false,
        pescetarian: false,
        keto: false,
        halal: false,
        kosher: false,
        gluten: false,
        milk: false,
        soy: false,
        eggs: false,
        peanuts: false,
        treenuts: false,
        fish: false,
        molluscs: false,
        crustaceans: false,
        mustard: false,
        sesame: false,
        celery: false,
        lupin: false,
        sulphites: false
    }});
    const [alert, setAlert] = useState({})
    const formStyle = { borderRadius: '10px', margin: '.3rem', width:'286px' }

    const handleNameInputChange = e => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
    };

    const handleCheckboxInputChange = e => {
        const name = e.target.name;
        const checked = e.target.checked;
        console.log(e.target.value)
        console.log(e.target.name)
        setFormInputValues(() => ({
            ...formInputValues,
            diets: {
                ...formInputValues.diets,
                [name]: checked
            } 
        }))
    }

    async function postRegister(diets) {
        const response = await fetch('http://www.eatanywhere.test:8080/api/register', {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        },
        responseType: 'json',
        body: JSON.stringify({
            first_name: formInputValues.firstName,
            last_name: formInputValues.lastName,
            email: formInputValues.email,
            password: formInputValues.password,
            date_of_birth: formInputValues.dateOfBirth,
            diet: diets
        }),
        })
        const data = await response.json();

        console.log(data);

        if (data.error) {
            setAlert();
        } else if (data.token) {
            props.setUser({
                loggedIn: true,
                token: data.token,
                user: data.user
            })
            setAlert({
                message: 'You\'ve been logged in successfully',
                style: {color: 'green'}
            })
            window.localStorage.setItem('token', data.token);
        }
    }

    const handleSubmitButtonClick = (e) => {
        e.preventDefault()
        const diets = getDietIds(formInputValues.diets)
        try {
            postRegister(diets);
        } catch (e) {
            console.log('errors', e)
        }
    } 

    useEffect(() => {
        user ? ( user.token ? location.replace('/') : null ) : null;
    }, [user])

    return (
        <form style={{ display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '1rem', paddingTop: '2rem'}}>
           <h2>Register</h2>
            <h4>{ alert.error }</h4>
           <input
            id="firstName"
            type="text"
            placeholder = "First name"
            value = {formInputValues.firstName}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <input
            id="lastName"
            type="text"
            placeholder = "Last name"
            value={formInputValues.lastName}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <input
            id="email"
            type="text"
            placeholder = "E-mail"
            value={formInputValues.email}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <input
            id="password"
            type="password"
            placeholder = "Password"
            value={formInputValues.password}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <input
            id="dateOfBirth"
            type="date"
            placeholder = "Date of birth"
            value={formInputValues.dateOfBirth}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <h4>Diets & Allergies</h4>
               <Row style={{alignItems:'center', justifyContent: 'center', paddingTop:'0',margin:'0rem', padding:'0rem', width:'50%'}}>
                <Col sm='12' md="6" >
                    {
                        dietNames.map((diet, key) => (
                            <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                                <input 
                                    type="checkbox"
                                    id={diet}
                                    name={diet}
                                    value={key + 1}
                                    onChange={handleCheckboxInputChange}
                                    checked={formInputValues.diets.diet}
                                    /> {diet}
                            </label>
                        ))
                    }
                    </Col>
            </Row>
           <button onClick = {handleSubmitButtonClick} style={{border: '1px solid blue', margin:'5px'}}>Submit</button>
       </form>
    )

}

export default Register;
