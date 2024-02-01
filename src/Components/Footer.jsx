import React from 'react'
import './Style.css'
function Footer() {
  return (
    <section className='footer'>
        <div className='footer-container'>
            <div className='footer-hero'>
                <div className='footer-section-header'>
                    <div className='child-footer'>
                        <p>Sign Up to Newletter </p>
                    </div>
                    <div className='child-footer'>
                        <input type="text"  placeholder='Your Email Address:'/>
                    </div>
                    <div className='child-footer'>
                        <p style={{fontSize:"15px"}}> Follow us on:</p>
                        <div className='child-footer-socials'>
                            <div className='footer-socials-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" data-name="Layer 1" viewBox="0 0 24 24" id="instagram"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg>
                            </div>
                            <div className='footer-socials-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" id="facebook"><path d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path></svg>
                            </div>
                            <div className='footer-socials-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="none" viewBox="0 0 512 512" id="twitter"><g clip-path="url(#clip0_84_15698)"><rect width="512" height="512" fill="#fff" rx="60"></rect><path fill="#000" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
                            </div>
                            <div className='footer-socials-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
                            </div>
                        </div>

                      
                    </div> 
                </div>

                <div className='footer-links'>
                            <div className='footer-nav'>
                                <div className='footer-nav-wrapper'>
                                    <p>.eCom</p>
                                </div>
                                <div className='footer-nav-wrapper'>
                                    <ul>
                                        <li>Home</li>
                                        <li>Shop</li>
                                        <li>About us</li>
                                        <li>Contact us</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className='footer-nav-wrapper'>
                                    <ul>
                                        <li>Mobiles</li>
                                        <li>Fashion</li>
                                        <li>Electronics</li>
                                        <li>Laptops</li>
                                        <li>Furniture</li>
                                    </ul>
                                </div>
                                <div className='footer-nav-wrapper'>
                                    <ul>
                                        <li>Terms & Conditions</li>
                                        <li>Offer Zone</li>
                                        <li>Carrer</li>
                                        <li>Customer Care</li>
                                        <li>Chat with us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='footer-bottom'>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16"> <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/></svg>All rights goes to NK Designs.</p>
                        </div>
            </div>
        </div>
    </section>
  )
}

export default Footer