

const Menu = () => {
   return (
      <section className="menu container">
         <h2 className="menu__title" data-aos="zoom-in">Menu</h2>
         <div className="menu__buttons" data-aos="zoom-in" data-aos-duration="2000">
            <button className="menu__buttons-btn menu__buttons-active">Show All</button>
            <button className="menu__buttons-btn">Meat</button>
            <button className="menu__buttons-btn">Vegetarian</button>
            <button className="menu__buttons-btn">Sea products</button>
            <button className="menu__buttons-btn">Mushroom</button>
         </div>
         <img className="menu__position-first" src="/img/menu-img/Menu.svg" alt="" />
         <div className="menu__box" data-aos="zoom-in" data-aos-duration="2000">
            <div className="menu-card">
               <img className="menu-card__image" src="./img/menu-img/italian.png" alt="" />

               <h3 className="menu-card__title">Italian</h3>

               <p className="menu-card__description">
                  Filling: onion, potato, tomato, <br />
                  mushrooms, cheese, olives, meat...
               </p>

               <div className="menu-card__sizes">
                  <button className="menu-card__size">22</button>
                  <button className="menu-card__size menu-card__active">28</button>
                  <button className="menu-card__size">33</button>
               </div>

               <button className="menu-card__ingredients-btn">
                  + Ingredients
               </button>

               <div className="menu-card__footer">
                  <p className="menu-card__price">
                     8,35 <sup className="menu-card__currency">$</sup>
                  </p>

                  <span className="menu-card__counter">
                     <button className="menu-card__counter-btn">-</button>
                     <span className="menu-card__counter-value">1</span>
                     <button className="menu-card__counter-btn menu-card__counter-active">+</button>
                  </span>
               </div>

               <button className="menu-card__order-btn">
                  Order Now
               </button>
            </div>
            <div className="menu-card">
               <img className="menu-card__image" src="./img/menu-img/Venecia.png" alt="" />

               <h3 className="menu-card__title">Venecia</h3>

               <p className="menu-card__description">
                  Filling: onion, potato, tomato, <br />
                  mushrooms, cheese, olives, meat...
               </p>

               <div className="menu-card__sizes">
                  <button className="menu-card__size">22</button>
                  <button className="menu-card__size menu-card__active">28</button>
                  <button className="menu-card__size">33</button>
               </div>

               <button className="menu-card__ingredients-btn">
                  + Ingredients
               </button>

               <div className="menu-card__footer">
                  <p className="menu-card__price">
                     7,35 <sup className="menu-card__currency">$</sup>
                  </p>

                  <span className="menu-card__counter">
                     <button className="menu-card__counter-btn">-</button>
                     <span className="menu-card__counter-value">1</span>
                     <button className="menu-card__counter-btn menu-card__counter-active">+</button>
                  </span>
               </div>

               <button className="menu-card__order-btn">
                  Order Now
               </button>
            </div>
            <div className="menu-card">
               <img className="menu-card__image" src="./img/menu-img/Meat.png" alt="" />

               <h3 className="menu-card__title">Meat</h3>

               <p className="menu-card__description">
                  Filling: onion, potato, tomato, <br />
                  mushrooms, cheese, olives, meat...
               </p>

               <div className="menu-card__sizes">
                  <button className="menu-card__size">22</button>
                  <button className="menu-card__size menu-card__active">28</button>
                  <button className="menu-card__size">33</button>
               </div>

               <button className="menu-card__ingredients-btn">
                  + Ingredients
               </button>

               <div className="menu-card__footer">
                  <p className="menu-card__price">
                     9,35 <sup className="menu-card__currency">$</sup>
                  </p>

                  <span className="menu-card__counter">
                     <button className="menu-card__counter-btn">-</button>
                     <span className="menu-card__counter-value">1</span>
                     <button className="menu-card__counter-btn menu-card__counter-active">+</button>
                  </span>
               </div>

               <button className="menu-card__order-btn">
                  Order Now
               </button>
            </div>
            <div className="menu-card">
               <img className="menu-card__image" src="./img/menu-img/Chees.png" alt="" />

               <h3 className="menu-card__title">Cheese</h3>

               <p className="menu-card__description">
                  Filling: onion, potato, tomato, <br />
                  mushrooms, cheese, olives, meat...
               </p>

               <div className="menu-card__sizes">
                  <button className="menu-card__size">22</button>
                  <button className="menu-card__size menu-card__active">28</button>
                  <button className="menu-card__size">33</button>
               </div>

               <button className="menu-card__ingredients-btn">
                  + Ingredients
               </button>

               <div className="menu-card__footer">
                  <p className="menu-card__price">
                     8,35 <sup className="menu-card__currency">$</sup>
                  </p>

                  <span className="menu-card__counter">
                     <button className="menu-card__counter-btn">-</button>
                     <span className="menu-card__counter-value">1</span>
                     <button className="menu-card__counter-btn menu-card__counter-active">+</button>
                  </span>
               </div>

               <button className="menu-card__order-btn">
                  Order Now
               </button>
            </div>
         </div>
         <img className="menu__position-second" src="./img/menu-img/Menu.svg" alt="" />
         <div className="menu-bg" data-aos="zoom-in-up" data-aos-duration="2000">
            <h2 className="menu-bg__titile">MOST POPULAR PIZZA</h2>
         </div>
         <img className="menu__position-third" src="./img/menu-img/Menu.svg" alt="" />
         <div className="menu__box" data-aos="zoom-in-bottom" data-aos-duration="2000">
            <div className="menu-card">
               <img className="menu-card__image" src="./img/menu-img/Argentina.png" alt="" />

               <h3 className="menu-card__title">Argentina</h3>

               <p className="menu-card__description">
                  Filling: onion, potato, tomato, <br />
                  mushrooms, cheese, olives, meat...
               </p>

               <div className="menu-card__sizes">
                  <button className="menu-card__size">22</button>
                  <button className="menu-card__size menu-card__active">28</button>
                  <button className="menu-card__size">33</button>
               </div>

               <button className="menu-card__ingredients-btn">
                  + Ingredients
               </button>

               <div className="menu-card__footer">
                  <p className="menu-card__price">
                     7,35 <sup className="menu-card__currency">$</sup>
                  </p>

                  <span className="menu-card__counter">
                     <button className="menu-card__counter-btn">-</button>
                     <span className="menu-card__counter-value">1</span>
                     <button className="menu-card__counter-btn menu-card__counter-active">+</button>
                  </span>
               </div>

               <button className="menu-card__order-btn">
                  Order Now
               </button>
            </div>
            <div className="menu-card">
               <img className="menu-card__image" src="./img/menu-img/Gribnaya.png" alt="" />

               <h3 className="menu-card__title">Gribnaya</h3>

               <p className="menu-card__description">
                  Filling: onion, potato, tomato, <br />
                  mushrooms, cheese, olives, meat...
               </p>

               <div className="menu-card__sizes">
                  <button className="menu-card__size">22</button>
                  <button className="menu-card__size menu-card__active">28</button>
                  <button className="menu-card__size">33</button>
               </div>

               <button className="menu-card__ingredients-btn">
                  + Ingredients
               </button>

               <div className="menu-card__footer">
                  <p className="menu-card__price">
                     6,35 <sup className="menu-card__currency">$</sup>
                  </p>

                  <span className="menu-card__counter">
                     <button className="menu-card__counter-btn">-</button>
                     <span className="menu-card__counter-value">1</span>
                     <button className="menu-card__counter-btn menu-card__counter-active">+</button>
                  </span>
               </div>

               <button className="menu-card__order-btn">
                  Order Now
               </button>
            </div>
            <div className="menu-card">
               <img className="menu-card__image" src="./img/menu-img/Tomato.png" alt="" />

               <h3 className="menu-card__title">Tomato</h3>

               <p className="menu-card__description">
                  Filling: onion, potato, tomato, <br />
                  mushrooms, cheese, olives, meat...
               </p>

               <div className="menu-card__sizes">
                  <button className="menu-card__size">22</button>
                  <button className="menu-card__size menu-card__active">28</button>
                  <button className="menu-card__size">33</button>
               </div>

               <button className="menu-card__ingredients-btn">
                  + Ingredients
               </button>

               <div className="menu-card__footer">
                  <p className="menu-card__price">
                     7,35 <sup className="menu-card__currency">$</sup>
                  </p>

                  <span className="menu-card__counter">
                     <button className="menu-card__counter-btn">-</button>
                     <span className="menu-card__counter-value">1</span>
                     <button className="menu-card__counter-btn menu-card__counter-active">+</button>
                  </span>
               </div>

               <button className="menu-card__order-btn">
                  Order Now
               </button>
            </div>
            <div className="menu-card">
               <img className="menu-card__image" src="./img/menu-img/Italianx2.png" alt="" />

               <h3 className="menu-card__title">Italian x2</h3>

               <p className="menu-card__description">
                  Filling: onion, potato, tomato, <br />
                  mushrooms, cheese, olives, meat...
               </p>

               <div className="menu-card__sizes">
                  <button className="menu-card__size">22</button>
                  <button className="menu-card__size menu-card__active">28</button>
                  <button className="menu-card__size">33</button>
               </div>

               <button className="menu-card__ingredients-btn">
                  + Ingredients
               </button>

               <div className="menu-card__footer">
                  <p className="menu-card__price">
                     8,35 <sup className="menu-card__currency">$</sup>
                  </p>

                  <span className="menu-card__counter">
                     <button className="menu-card__counter-btn">-</button>
                     <span className="menu-card__counter-value">1</span>
                     <button className="menu-card__counter-btn menu-card__counter-active">+</button>
                  </span>
               </div>

               <button className="menu-card__order-btn">
                  Order Now
               </button>
            </div>
         </div>
      </section>
   )
}

export default Menu