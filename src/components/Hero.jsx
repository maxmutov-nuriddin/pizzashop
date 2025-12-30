const Hero = () => {
   const videoSrc = null; // или путь к видео, если есть

   return (
      <section className="hero container">
         <img className="hero__position-first" src="./img/hero-img/Pizza.svg" alt="" />

         <div className="hero__left" data-aos="zoom-in-down" data-aos-duration="2000">
            <h1 className="hero__left-title left__title">
               The Fastest <img className="left__title-img" src="./img/hero-img/Vector 2.svg" alt="right line" /> <br />
               Pizza <img width="48" src="./img/hero-img/Lightning 2.svg" alt="Lightning" /> Delivery
            </h1>
            <p className="hero__left-text left__text">
               We will deliver juicy pizza for your family in 30 <br /> minutes, if the courier is late
               <span className="left__text-span">- pizza is free!</span>
            </p>

            <div className="hero__left-card left__card">
               <p className="left__card-text">Cooking process:</p>
               {videoSrc && (
                  <video
                     className="left__card-video"
                     width="272"
                     src={videoSrc}
                     poster="/img/hero-img/hero-video.jpg"
                     controls
                  />

               )}
            </div>

            <div className="hero__left-box left__card">
               <button className="left__card-order">To order</button>
               <button className="left__card-menu">Pizza-Menu</button>
            </div>
         </div>

         <div className="hero__right" data-aos="zoom-in-up" data-aos-duration="2000">
            <img className="hero__right-top" width="251" height="251" src="./img/hero-img/hero-top-right.png" alt="" />
            <img className="hero__right-pizza" width="456" height="683" src="./img/hero-img/hero-img.png" alt="pizza" />
            <img className="hero__right-bottom" width="212" height="226" src="./img/hero-img/hero-botton-left.png" alt="" />
         </div>

         <img className="hero__position-second" src="./img/hero-img/Pizza.svg" alt="" />
         <img className="hero__position-third" src="./img/hero-img/Pizza.svg" alt="" />
         <img className="hero__position-fourth" src="./img/hero-img/Vector 1.svg" alt="right line" />
      </section>
   );
};

export default Hero;
