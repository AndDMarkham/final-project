import React, { useState } from "react"
import axios from "axios";

const dietMap = {
    vegan: 1,
    vegetarian: 2
}

const getDietIds = (diets) => Object.keys(diets).reduce((acc, dietName) => {
        if(diets[dietName]) acc.push(dietMap[dietName])
        return acc
    }, [])

const DishForm = props => {
    const [formInputValues, setFormInputValues] = useState({name: '', description: '', diets:{
        vegan: false,
        vegetarian: false
    }});
    const [formSubmitSuccess, setFormSubmitSuccess] = useState()
    const formStyle = { borderRadius: '10px', margin: '2rem' }


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
       <form style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '15rem', paddingTop: '5rem'}}>
           <h2>Add a new dish!</h2>
           <input
            id="name"
            type="text"
            placeholder = "name"
            value = {formInputValues.name}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <input
            id="description"
            type="text"
            placeholder = "description"
            value={formInputValues.description}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <label>
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
            <br />
           <button onClick = {handleSubmitButtonClick} style={{border: '1px solid blue', margin:'5px'}}>Submit</button>
           {formSubmitSuccess === true && <h3>Congrats!</h3>}
           {formSubmitSuccess === false && <h3 style={{ color: 'red'}}>Error occured, try later</h3>}
       </form>
   )
};

export default DishForm;