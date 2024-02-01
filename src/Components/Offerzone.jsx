import React from 'react'
import Gamingpad from '../Assets/Images/pad.png'
import Macbook from '../Assets/Images/macbook.png'
import './Style.css'
function Offerzone() {
  return (
    <>
        <section className='offer-zone'>
            <div className='offer-container'>
                <div className='offer-wrapper-flex'>
                    <div className='wrapper-child'>
                        <div className='offer-content'>
                            <div className='offer-badge'>
                                <p>New Arrivals</p>
                            </div>
                            <div className='offer-header'>
                                <p>Gaming Pads</p>
                                <span>Latest Gaming Pads of Xbox</span>
                                <div className='offer-btn'>
                                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="arrow"><path d="M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z"></path></svg></button>
                                </div>
                            </div>
                        </div>
                        <div className='offer-image'>
                            <img src={Gamingpad} alt="" />
                        </div>
                    </div>


                    <div className='wrapper-child'>
                    <div className='offer-content'>
                            <div className='offer-badge'>
                                <p>New Arrivals</p>
                            </div>
                            <div className='offer-header'>
                                <p>Gaming Pads</p>
                                <span>Latest Gaming Pads of Xbox</span>
                                <div className='offer-btn'>
                                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="arrow"><path d="M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z"></path></svg></button>
                                </div>
                               
                            </div>
                        </div>
                        <div className='offer-image' style={{top:"8px",right:"-320px"}}>
                            <img src={Macbook} alt="" />
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    </>
  )
}

export default Offerzone