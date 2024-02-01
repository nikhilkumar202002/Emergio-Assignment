import React from 'react'
import BannerImage from '../../src/Assets/Images/banner.png'
import './Style.css'
function Banner() {
  return (
    <>
        <section className='banner-container'>
            <div className='container-fluid'>
                <div className='banner-wrapper'>
                    <div className='child-wrapper-content'>
                        <div className='sub-content'>
                        <p>Endless <br /> Online <span>Treasures.</span></p>
                        </div>
                        <div className='sub-details'>
                            <p>Get the best deals on electronics, fashion and more. Shop now for your favorite brands at unbeatable prices</p>
                        </div>

                        <div className='wrapper-btn'>
                            <div className='btns'>
                                <button>Shop Now</button>
                            </div>
                            <div className='btns explore'>
                                <button style={{padding: "10px 32px",
                                                border:" 1px solid var(--primary-color)",
                                                backgroundColor : "transparent",
                                                color : "var(--primary-color)" }}>Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className='child-wrapper-image'>
                        <img src={BannerImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner