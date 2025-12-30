import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = ({setCartCount}) => {
   const [activeFilter, setActiveFilter] = useState("Show All");
   const [cardStates, setCardStates] = useState({});

   const pizzaData = [
      { id: 1, name: "Italian", price: 8.35, image: "./img/menu-img/italian.png", category: "Meat" },
      { id: 2, name: "Venecia", price: 7.35, image: "./img/menu-img/Venecia.png", category: "Sea products" },
      { id: 3, name: "Meat", price: 9.35, image: "./img/menu-img/Meat.png", category: "Meat" },
      { id: 4, name: "Cheese", price: 8.35, image: "./img/menu-img/Chees.png", category: "Vegetarian" },
      { id: 5, name: "Argentina", price: 7.35, image: "./img/menu-img/Argentina.png", category: "Meat", popular: true },
      { id: 6, name: "Gribnaya", price: 6.35, image: "./img/menu-img/Gribnaya.png", category: "Mushroom", popular: true },
      { id: 7, name: "Tomato", price: 7.35, image: "./img/menu-img/Tomato.png", category: "Vegetarian", popular: true },
      { id: 8, name: "Italian x2", price: 8.35, image: "./img/menu-img/Italianx2.png", category: "Meat", popular: true },
   ];

   useEffect(() => {
      AOS.init();
      
      // Initialize card states
      const initialStates = {};
      pizzaData.forEach(pizza => {
         initialStates[pizza.id] = {
            quantity: 1,
            selectedSize: 28
         };
      });
      setCardStates(initialStates);
   }, []);

   const handleFilterClick = (filter) => {
      setActiveFilter(filter);
   };

   const handleSizeChange = (pizzaId, size) => {
      setCardStates(prev => ({
         ...prev,
         [pizzaId]: {
            ...prev[pizzaId],
            selectedSize: size
         }
      }));
   };

   const handleQuantityChange = (pizzaId, change) => {
      setCardStates(prev => {
         const currentQuantity = prev[pizzaId]?.quantity || 1;
         const newQuantity = Math.max(1, currentQuantity + change);
         
         return {
            ...prev,
            [pizzaId]: {
               ...prev[pizzaId],
               quantity: newQuantity
            }
         };
      });
   };

   const handleOrder = (pizzaId) => {
      const quantity = cardStates[pizzaId]?.quantity || 1;
      setCartCount(prev => prev + quantity);
   };

   const handleIngredientsClick = () => {
      alert("Unavailable at the moment");
   };

   const filteredPizzas = pizzaData.filter(pizza => {
      if (activeFilter === "Show All") return true;
      return pizza.category === activeFilter;
   });

   const regularPizzas = filteredPizzas.filter(p => !p.popular);
   const popularPizzas = filteredPizzas.filter(p => p.popular);

   const PizzaCard = ({ pizza }) => {
      const state = cardStates[pizza.id] || { quantity: 1, selectedSize: 28 };
      
      return (
         <div className="menu-card">
            <img className="menu-card__image" src={pizza.image} alt={pizza.name} />
            <h3 className="menu-card__title">{pizza.name}</h3>
            <p className="menu-card__description">
               Filling: onion, potato, tomato, <br />
               mushrooms, cheese, olives, meat...
            </p>
            <div className="menu-card__sizes">
               {[22, 28, 33].map(size => (
                  <button
                     key={size}
                     className={`menu-card__size ${state.selectedSize === size ? 'menu-card__active' : ''}`}
                     onClick={() => handleSizeChange(pizza.id, size)}
                  >
                     {size}
                  </button>
               ))}
            </div>
            <button 
               className="menu-card__ingredients-btn"
               onClick={handleIngredientsClick}
            >
               + Ingredients
            </button>
            <div className="menu-card__footer">
               <p className="menu-card__price">
                  {pizza.price.toFixed(2)} <sup className="menu-card__currency">$</sup>
               </p>
               <span className="menu-card__counter">
                  <button 
                     className="menu-card__counter-btn"
                     onClick={() => handleQuantityChange(pizza.id, -1)}
                  >
                     -
                  </button>
                  <span className="menu-card__counter-value">{state.quantity}</span>
                  <button 
                     className="menu-card__counter-btn menu-card__counter-active"
                     onClick={() => handleQuantityChange(pizza.id, 1)}
                  >
                     +
                  </button>
               </span>
            </div>
            <button 
               className="menu-card__order-btn"
               onClick={() => handleOrder(pizza.id)}
            >
               Order Now
            </button>
         </div>
      );
   };

   return (
      <section className="menu container">
         <h2 className="menu__title" data-aos="zoom-in">Menu</h2>
         
         <div className="menu__buttons" data-aos="zoom-in" data-aos-duration="2000">
            {["Show All", "Meat", "Vegetarian", "Sea products", "Mushroom"].map(filter => (
               <button
                  key={filter}
                  className={`menu__buttons-btn ${activeFilter === filter ? 'menu__buttons-active' : ''}`}
                  onClick={() => handleFilterClick(filter)}
               >
                  {filter}
               </button>
            ))}
         </div>

         <img className="menu__position-first" src="/img/menu-img/Menu.svg" alt="" />

         {regularPizzas.length > 0 && (
            <div className="menu__box" data-aos="zoom-in" data-aos-duration="2000">
               {regularPizzas.map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} />
               ))}
            </div>
         )}

         {popularPizzas.length > 0 && (
            <>
               <img className="menu__position-second" src="./img/menu-img/Menu.svg" alt="" />
               <div className="menu-bg" data-aos="zoom-in-up" data-aos-duration="2000">
                  <h2 className="menu-bg__titile">MOST POPULAR PIZZA</h2>
               </div>
               <img className="menu__position-third" src="./img/menu-img/Menu.svg" alt="" />

               <div className="menu__box" data-aos="zoom-in-bottom" data-aos-duration="2000">
                  {popularPizzas.map(pizza => (
                     <PizzaCard key={pizza.id} pizza={pizza} />
                  ))}
               </div>
            </>
         )}
      </section>
   );
};

export default Menu;