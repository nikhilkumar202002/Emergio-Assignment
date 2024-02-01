import React, { useState } from 'react'
import './Style.css'
function HEADER() {
    

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
        <header>
            <section className='container'>
                <div className='class-wrapper'>
                    <div className='child-one'>
                        <p>.eCom</p>
                    </div>
                    <div className='hamburger-menu'>
                        <button onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="menu"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg></button>
                    </div>
                    <div className='child-two'>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Blog</li>
                            <li><div className='child-flex'> 
                                <div className='child-flex-elements'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" id="profile"><g fill-rule="evenodd"><g  transform="translate(-180 -2159)"><g transform="translate(56 160)"><path d="M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 0 0 2.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 0 0 1.004 1.109.99.99 0 0 0 .993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218"></path></g></g></g></svg>
                                </div>

                                <div className='child-flex-elements'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" data-name="Layer 1" viewBox="0 0 24 24" id="cart"><path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path></svg>
                                </div>
                            </div></li>
                        </ul>
                    </div>
                </div>
            </section>
        </header>
{
    isOpen ? 
    <div className='menu-list'>
    <div className='menu-items'>
        <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Blog</li>
        <li>Profile</li>
        <li>Cart</li>
        </ul>
    </div>
</div>
:
""
}
       
    </>
  )
}

export default HEADER