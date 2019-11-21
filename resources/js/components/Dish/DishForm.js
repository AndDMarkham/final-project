import React, { useState } from "react"

const DishForm = props => {
    const [formInputValues, setFormInputValues] = useState({name: '', description: ''});
    const [formSubmitSuccess, setFormSubmitSuccess] = useState()
    const formStyle = { borderRadius: '10px', margin: '2rem' }


    const handleNameInputChange = e => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
    };

   const handleSubmitButtonClick = (e) => {
       e.preventDefault()

       console.log("clicked", formInputValues)
       fetch('http://www.eatanywhere.test:8080/dishes')
       .then (() => {
           setFormSubmitSuccess(true)
       })
       .catch((e) => {
           setFormSubmitSuccess(false)
       })
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
           <input
            id="description"
            type="text"
            placeholder = "description"
            value={formInputValues.description}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <button onClick = {handleSubmitButtonClick} style={{border: '1px solid blue', margin:'5px'}}>Submit</button>
           {formSubmitSuccess === true && <h3>Congrats!</h3>}
           {formSubmitSuccess === false && <h3 style={{ color: 'red'}}>Error occured, try later</h3>}
       </form>
   )
};

export default DishForm;