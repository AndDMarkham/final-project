import React, { useState } from "react"

const ReviewForm = props => {
    const [formInputValues, setFormInputValues] = useState({text: '', rating: ''});
    const [formSubmitSuccess, setFormSubmitSuccess] = useState()

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
       <form style={{display: 'flex', flexDirection: 'column'}}>
           <input
            id="text"
            type="text"
            value = {formInputValues.text}
            placeholder = "Review"
            onChange = {handleNameInputChange}
           />
           <input
            id="rating"
            type="number"
            placeholder = "Rating"
            value={formInputValues.rating}
            onChange = {handleNameInputChange}
           />
           <button onClick = {handleSubmitButtonClick} style={{border: '1px solid blue', margin:'5px'}}>Submit</button>
           {formSubmitSuccess === true && <h3>Congrats!</h3>}
           {formSubmitSuccess === false && <h3 style={{ color: 'red'}}>Error occured, try later</h3>}
       </form>
   )
};

export default ReviewForm;
