import React from 'react'
import Mobile from '../Assets/Images/mobile.png'
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
                </div>
            </div>
        </section>
    </>
  )
}

export default Categorycards