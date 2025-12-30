
const Events = () => {
   return (
      <section className="event container">
         <div className="events" data-aos="zoom-in-down" data-aos-duration="2000">
            <img className="events__position-first" src="./img/events-img/Events.svg" alt="" />
            <div className="events__row-1">
               <div className="events__item events__item--1">
                  <h3>HOW WE <br /> COOKING</h3>
                  <button className="events__mote-btn">
                     More
                  </button>
               </div>
               <div className="events__item events__item--2">
                  <h3>
                     OUR BLOG
                  </h3>
                  <button className="events__mote-btn">
                     More
                  </button>
               </div>
               <div className="events__item events__item--3">
                  <h2>
                     Events
                  </h2>
                  <p className="events__description">
                     There are regular events in our pizzeria that will allow you to eat delicious food for a lower
                     price!
                  </p>
               </div>
            </div>
            <div className="events__row-2">
               <div className="events__item events__item--4">
                  <h3>
                     TWO PIZZA <br />
                     FOR 1 PRICE
                  </h3>
                  <button className="events__mote-btn">
                     More
                  </button>
               </div>
               <div className="events__item events__item--6">
                  <h3>
                     KITCHEN <br /> TOUR
                  </h3>
                  <button className="events__mote-btn">
                     More
                  </button>
               </div>
            </div>
            <div className="events__row-3">
               <div className="events__item events__item--7">
                  <h3>
                     FREE COFFEE <br /> FOR 3 PIZZA
                  </h3>
                  <button className="events__mote-btn">
                     More
                  </button>
               </div>
               <div className="events__item events__item--8">
                  <h3>
                     OUR <br /> INSTAGRAM
                  </h3>
                  <button className="events__mote-btn">
                     More
                  </button>
               </div>
               <div className="events__item events__item--9">
                  <h3>
                     WHERE ARE <br /> YOU CHOOSE <br /> US?
                  </h3>
                  <button className="events__mote-btn">
                     More
                  </button>
               </div>
            </div>
            <img className="events__position-second" src="./img/events-img/Events.svg" alt="" />
         </div>
      </section>
   )
}

export default Events