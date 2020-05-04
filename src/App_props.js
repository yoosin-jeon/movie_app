import React from 'react';
import PropTypes from "prop-types";


const foodList = [{
  id:1,
  name:"t1"
  ,image:"tt"
  ,rating:5
},{
  id:2,
  name:"t2"
  ,image:"tt"
  ,rating:4
},{
  id:3,
  name:"t3"
  ,image:"tt"
  ,rating:3
},{
  id:4,
  name:"t4"
  ,image:"tt"
  ,rating:2
},{
  id:5,
  name:"t5"
  ,image:"tt"
  ,rating:1
}
]


function Food({name, picture, rating} ) {
  
  return (
  <div>
    <h1>I LIKE {name}</h1>
    <h5>{rating}/5</h5>
    <img src={picture} alt={name}></img>      
  </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div> 
      {foodList.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}

export default App;
