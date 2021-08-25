import React, { useState, useEffect } from "react";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import axios from "axios";

import Categories from './Categories'


function ShoppingList({ cart, updateCart }) {

 

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://appfreshshop.herokuapp.com/product")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  });

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  const [activeCategory, setActiveCategory] = useState('')
  
	const categories = products.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)


  return (
    <div className="lmj-shopping-list">
    <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
      <ul className="lmj-plant-list">
        {products.map(({ id, gallery, name, price, category }) =>
        !activeCategory || activeCategory === category ? (
          <div key={id}>
            <PlantItem gallery={gallery} name={name} price={price} />
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList;
