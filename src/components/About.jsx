import React from 'react'

const About = () => {
   return (
      <section className="about container">
         <div className="about__content" data-aos="zoom-in-down" data-aos-duration="2000">
            <h2 className="about__title">About us</h2>

            <p className="about__text">
               In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara,
               Izhevsk, and in the future we plan to develop the network in other major cities of Russia.
            </p>

            <div className="about__gallery">
               <div className="about__gallery-column about__gallery-column--left">
                  <img className="about__image image--big" src="./img/about-img/about-img-5.png" alt="" />
                  <img className="about__image image--medium" src="./img/about-img/about-img-3.png" alt="" />
               </div>

               <div className="about__gallery-column about__gallery-column--right">
                  <img className="about__image image--medium" src="./img/about-img/about-img-1.png" alt="" />
                  <img className="about__image image--small" src="./img/about-img/about-img-2.png" alt="" />
                  <img className="about__image image--small" src="./img/about-img/about-img-4.png" alt="" />
               </div>
            </div>

            <p className="about__text about__text--secondary">
               The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing
               work in order to receive / prepare / form / deliver customer orders on time.
            </p>
         </div>
         <div className="about__right" data-aos="zoom-in-up" data-aos-duration="2000">
            <img className="about__right-top" width="251" height="251" src="./img/hero-img/hero-top-right.png" alt="" />
            <img className="about__right-pizza" width="567" height="541" src="./img/about-img/about-left.jpg" alt="pizza" />
            <img className="about__right-bottom" width="212" height="226" src="./img/hero-img/hero-botton-left.png" alt="" />
         </div>
      </section>
   )
}

export default About