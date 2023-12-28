import React from 'react'
import './footer.css'
import FooterNavItem from '../components/FooterNavItem'

function Footer() {
    const usefullLinks=[
        'Home',
        'Tv Shows',
        'Terms of service',
        'privacy Policy'
    ]
    const locations=[
        'Salem',
        'Chennai',
        'Delhi',
        'bangalore'
]

  return (
   <footer id="footer" className='footer'>
    <div className='footer-top'>
        <div className='container'>
            <div className='row gy-4'>
                <div className='col-lg-5 col-md-12 footer-info'>
                    <a href='/'className='logo d-flex align-item-center'>
                        <span>CINEMA</span>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, provident inventore vel quae explicabo quibusdam.

                    </p>
                    <div className='social-links mt-3'>
                        <a href='#'>
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href='#'>
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href='#'>
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href='#'>
                        <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </div>

                </div>
                <div className='col-lg-2 col-6 footer-links'>
                    <h4>Links</h4>
                    <ul>
                        {
                            usefullLinks.map(links =>(
                                <FooterNavItem key={links} name={links}/>
                            ))
                        }
                    </ul>
                </div>

                <div className='col-lg-2 col-6 footer-links'>
                    <h4>Our Cinema</h4>
                    <ul>
                        {
                            locations.map(links =>(
                                <FooterNavItem key={links} name={links}/>
                            ))
                        }
                    </ul>
                </div>

                <div className='col-lg-3 footer-contact text-center text-md-start'>
                    <h4>Contact Me</h4>
                    <p>
                        Street name<br/>
                        Salem Tamil Nadu, Statr 604407 <br/>
                        <strong>Phone:</strong>+91 9789478295<br/>
                        <strong>Email:</strong>janhagovindan@gmail.com<br/>
                    </p>
                </div>

               

            </div>
        </div>
    </div>

    <div className='container'>
        <div className="copyright">
            &copy; Copyright{''}
            <strong>
                <span>Janha Govindan</span>

            </strong>
            .All Right Reserved
        </div>
     
    </div>


   </footer>
  )
}

export default Footer
