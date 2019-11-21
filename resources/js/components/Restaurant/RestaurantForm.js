import React, {useState, useEffect} from 'react';

const RestaurantForm = props => {
    const [formInputValues, setFormInputValues] = useState({name:'', address:'', website_url:''})
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
        fetch('http://www.eatanywhere.test:8080/api/restaurants')
        .then(() => {
          setFormSubmitSuccess(true)
        })
        .catch((e) => {
          setFormSubmitSuccess(false)
        })
      }

    return (
        <form style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '15rem', paddingTop: '5rem'}}>
            Add New Restaurant
            <input
            id="name"
            type="text"
            value={formInputValues.name}
            onChange={handleNameInputChange}
            style={formStyle}
            />
    
            <input
            id="address"
            type="text"
            value={formInputValues.address}
            onChange={handleNameInputChange}
            style={formStyle}     
            />

            <input
            id="website_url"
            type="text"
            value={formInputValues.website_url}
            onChange={handleNameInputChange}
            style={formStyle}
            />
            <button onClick={handleSubmitButtonClick}>Submit</button>
            {formSubmitSuccess === true && <h3>Congrats!</h3>}
            {formSubmitSuccess === false && <h3>Error Occurred, try again later</h3>}
        </form>
    )
}

export default RestaurantForm;