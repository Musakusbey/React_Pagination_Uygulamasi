import React, { useState, useEffect } from 'react'
import './App.css'


const App = () => {

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  function ShowMoreMeals() {
    setVisible(item => item += 3)
  }


  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=british')
      .then((response) => response.json())
      .then((data) => setItems(data.meals));

  }, [])

  return (
    <div className='App'>
      <h1 className='header'>British Meals </h1>
      <div className='container'>
        {items.slice(0, visible).map((item) => {
          return (
            <div className='card'>
              <img src={item.strMealThumb} />
              <div>
                <p>{item.strMeal}</p>
              </div>
            </div>
          )
        })}
        <button onClick={ShowMoreMeals}> Click For More Meals </button>

      </div>
    </div>
  )
}

export default App