import React, { useState } from "react"
import axios from "axios";

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

const getDietIds = (diets) => Object.keys(diets).reduce((acc, dietName) => {
        if(diets[dietName]) acc.push(dietMap[dietName])
        return acc
    }, [])

const Register = props => {
    const [formInputValues, setFormInputValues] = useState({firstName: '', lastName: '', userName: '', email: '', dateofBirth: '', diets:{
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
    const [formSubmitSuccess, setFormSubmitSuccess] = useState()
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

    const handleSubmitButtonClick = (e) => {
        e.preventDefault()
        const diets = getDietIds(formInputValues.diets)
        console.log("diets", diets)
    //    axios.post('http://www.eatanywhere.test:8080/api/dish/new',{
    //        name: "name",
    //        description: "description",
    //        diets: getDietIds(formInputValues.diets)
    //    })
        
    //    .then ((response) => {
    //        console.log(response)
    //        setFormSubmitSuccess(true)
    //    })
    //    .catch((e) => {
    //        console.log(e)
    //        setFormSubmitSuccess(false)
    //    })
    } 

    return (
        <form style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '1rem', paddingTop: '0rem'}}>
           <h2>Register</h2>
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
            id="userName"
            type="text"
            placeholder = "User name"
            value={formInputValues.userName}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <input
            id="email"
            type="text"
            placeholder = "email"
            value={formInputValues.email}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <input
            id="dateofBirth"
            type="text"
            placeholder = "Date of birth"
            value={formInputValues.dateOfBirth}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <h4>Diet & Allergy Restrictions</h4>
           <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'flex-start', padding: '0rem', paddingTop: '0rem', margin:'0rem'}}>
                <div style={{display:'flex',flexDirection:'column',margin:'5rem', marginTop:'1rem', marginBottom:'1rem'}}>
                <label style={{width:'100px'}}>
                        <input 
                            type="checkbox"
                            id="vegan"
                            name="vegan"
                            value="1"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.vegan}
                            /> Vegan
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="vegetarian"
                            name="vegetarian"
                            value="2"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.vegetarian}
                            /> Vegetarian
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="pescetarian"
                            name="pescetarian"
                            value="3"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.pescetarian}
                            /> Pescetarian
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="keto"
                            name="keto"
                            value="4"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.keto}
                            /> Keto
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="halal"
                            name="halal"
                            value="5"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.halal}
                            /> Halal
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="kosher"
                            name="kosher"
                            value="6"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.kosher}
                            /> Kosher
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="gluten"
                            name="gluten"
                            value="7"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.gluten}
                            /> Gluten
                    </label>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',margin:'5rem', marginTop:'1rem', marginBottom:'1rem'}}>
                    <label style={{width:'100px'}}>
                        <input 
                            type="checkbox"
                            id="milk"
                            name="milk"
                            value="8"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.milk}
                            /> Milk
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="soy"
                            name="soy"
                            value="9"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.soy}
                            /> Soy
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="eggs"
                            name="eggs"
                            value="10"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.eggs}
                            /> Eggs
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="peanuts"
                            name="peanuts"
                            value="11"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.peanuts}
                            /> Peanuts
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="treenuts"
                            name="treenuts"
                            value="12"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.treenuts}
                            /> Tree nuts
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="fish"
                            name="fish"
                            value="13"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.fish}
                            /> Fish
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="molluscs"
                            name="molluscs"
                            value="14"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.molluscs}
                            /> Molluscs
                    </label>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',margin:'5rem', marginTop:'1rem', marginBottom:'1rem'}}>
                    <label style={{width:'150px'}}>
                        <input 
                            type="checkbox"
                            id="crustaceans"
                            name="crustaceans"
                            value="15"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.crustaceans}
                            /> Crustaceans
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="mustard"
                            name="mustard"
                            value="16"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.mustard}
                            /> Mustard
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="sesame"
                            name="sesame"
                            value="17"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.sesame}
                            /> Sesame
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="celery"
                            name="celery"
                            value="18"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.celery}
                            /> Celery
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="lupin"
                            name="lupin"
                            value="19"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.lupin}
                            /> Lupin
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id="sulphites"
                            name="sulphites"
                            value="20"
                            onChange={handleCheckboxInputChange}
                            checked={formInputValues.diets.sulphites}
                            /> Sulphites
                    </label>
                    <br />
                    </div>
            </div>
           <button onClick = {handleSubmitButtonClick} style={{border: '1px solid blue', margin:'5px'}}>Submit</button>
           {formSubmitSuccess === true && <h3>Congrats!</h3>}
           {formSubmitSuccess === false && <h3 style={{ color: 'red'}}>Error occured, try later</h3>}
       </form>
   )
};

export default Register;
