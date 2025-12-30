const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container ">
            <div className="footer__brand">
               <div className="footer__logo">pizzashop</div>
            </div>

            <nav className="footer__nav footer__home">
               <h4 className="footer__title">Home</h4>
               <ul className="footer__list">
                  <li><a className="footer__link" href="#">To Order</a></li>
                  <li><a className="footer__link" href="#">About us</a></li>
                  <li><a className="footer__link" href="#">Events</a></li>
                  <li><a className="footer__link" href="#">Menu</a></li>
               </ul>
            </nav>

            <nav className="footer__nav footer__events">
               <h4 className="footer__title">Events</h4>
               <ul className="footer__list">
                  <li><a className="footer__link" href="#">3 Pizza 1 Free Coffee</a></li>
                  <li><a className="footer__link" href="#">2 Pizza for 1 Price</a></li>
                  <li><a className="footer__link" href="#">Kitchen Tour</a></li>
               </ul>
            </nav>

            <nav className="footer__nav footer__menu">
               <h4 className="footer__title">Menu</h4>
               <ul className="footer__list">
                  <li><a className="footer__link" href="#">Show All</a></li>
                  <li><a className="footer__link" href="#">Seaproducts</a></li>
                  <li><a className="footer__link" href="#">Vegan</a></li>
                  <li><a className="footer__link" href="#">Meat</a></li>
               </ul>
            </nav>

            <nav className="footer__nav footer__about">
               <h4 className="footer__title">About Us</h4>
               <ul className="footer__list">
                  <li><a className="footer__link" href="#">Our History</a></li>
                  <li><a className="footer__link" href="#">Why We?</a></li>
               </ul>
            </nav>

            <a href="tel:+79373335533" className="footer__phone">+7 (937) 333-55-33</a>

            <div className="footer__social">
               <a className="footer__social-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24" fill="none" stroke="#FF8230"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-instagram-icon lucide-instagram">
                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
               </a>

               <a className="footer__social-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24" fill="none" stroke="#FF8230"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-twitter-icon lucide-twitter">
                     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
               </a>

               <a className="footer__social-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24" fill="none" stroke="#FF8230"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-facebook-icon lucide-facebook">
                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
               </a>

            </div>
         </div>
      </footer>
   )
}

export default Footer