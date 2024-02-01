import React from 'react'
import Mobile from '../Assets/Images/mobile.png'
import Fashion from '../Assets/Images/fashion.png'
import Laptops from '../Assets/Images/laptop.png'
import Airpods from '../Assets/Images/airpod.png'
import Furniture from '../Assets/Images/furniture.png'
import Appliance from '../Assets/Images/istockphoto-489937474-612x612.png'
import './Style.css'
function Categorycards() {
  return (
    <>
        <section className='category-container'>
            <div className='category-fluid'>
                <div className='caregory-cards'>
                    <div className='category-card'>
                        <div className='category-image'>
                            <img src={Mobile} alt="" />
                        </div>
                        <div className='category-names'>
                            <p>Mobiles</p>
                        </div>
                       
                    </div>
                    <div className='category-card'>
                        <div className='category-image'>
                            <img src={Fashion} alt="" />
                        </div>
                        <div className='category-names'>
                            <p>Fashions</p>
                        </div>
                       
                    </div>
                    <div className='category-card'>
                        <div className='category-image'>
                            <img src={Laptops} alt="" />
                        </div>
                        <div className='category-names'>
                            <p>Laptops</p>
                        </div>
                       
                    </div>
                    <div className='category-card'>
                        <div className='category-image'>
                            <img src={Airpods} alt="" />
                        </div>
                        <div className='category-names'>
                            <p>Wireless Airpods</p>
                        </div>
                       
                    </div>
                    <div className='category-card'>
                        <div className='category-image'  >
                            <img src={Furniture} alt=""  style={{width: "60%", paddingLeft:"30px"}}/>
                        </div>
                        <div className='category-names'>
                            <p>Furniture</p>
                        </div>
                       
                    </div>
                    <div className='category-card'>
                        <div className='category-image'>
                            <img src={Appliance} alt="" />
                        </div>
                        <div className='category-names'>
                            <p>Appliance</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Categorycards