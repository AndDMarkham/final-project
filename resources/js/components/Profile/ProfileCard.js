import React, { useState, useEffect } from 'react';



const ProfileCard = props => {
    console.log('profiletest', props.user.user.id)
    const [reviews, setReviews] = useState();
    useEffect(() => {
        console.log('user id', props.user.user.id)
        async function fetchReviews(){
            console.log('user id inside', props.user.user.id)
            const response = await fetch(`http://www.eatanywhere.test:8080/api/review/${props.user.user.id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + props.user.token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setReviews(data);
            console.log('reviews', data);
        }
            fetchReviews();
    }, []);
    
    return (
        <div>
        <h1>hello</h1>
        </div>
    )
    
    
}
export default ProfileCard;

// const RestaurantDetail = props => {
//     console.log(props.restaurantId)
//     const [restaurant, setRestaurant] = useState();
//     useEffect(()=> {
//         const token = window.localStorage.getItem('token');
//         const id = JSON.parse(window.localStorage.getItem('id'));
//         async function fetchRestaurant(){
//             const response = await fetch(`http://www.eatanywhere.test:8080/api/restaurant/${props.restaurantId}`, {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Authorization': 'Bearer ' + token,
//                     'X-Requested-With': 'XMLHttpRequest',
//                     'Content-Type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             setRestaurant(data);
//             console.log('restdata', data);
//         }
//             fetchRestaurant();
//     },[props.restaurantId]);

// const restaurantDetailStyle = { padding:'2rem'}
// const restaurantDetailPageStyle = { overflowY: 'scroll', height: '85vh' };
// if (restaurant) {
//     console.log('restaurant', restaurant);
//     return (
//         <div style={restaurantDetailPageStyle}>
//             <h1>Restaurant Details</h1>
//             <div style={{display:'flex', flexDirection:'row'}}>
//                 <div style={restaurantDetailStyle}> Name: {restaurant.name} </div>
//                 <div style={restaurantDetailStyle}>Address: {restaurant.address} </div>
//                 <div style={restaurantDetailStyle}>Phone: {restaurant.phone} </div>
//                 <div style={restaurantDetailStyle}>Website: {restaurant.website_url} </div>
//             </div>
//             <div style={restaurantDetailPageStyle}>
//                 {
//                     restaurant.dishes.map((dish, key) => (
//                         <Card key={key} className="dishCard shadow-sm p-3 mb-5 bg-white rounded">
//                             <div>
//                                 <CardTitle>{dish.name}</CardTitle>
//                                     <div>{dish.description}
//                                     </div>
//                             </div>
//                                 <Reviews 
//                                     reviews={dish.reviews} 
//                         />
//                         </Card>
                        
//                     ))
//                 }
//             </div>
//         </div>
//     )
// } return ('Loading...')
// }
// export default RestaurantDetail;