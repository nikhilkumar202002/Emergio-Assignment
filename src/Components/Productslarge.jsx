import React, { useState } from 'react'

import Product1 from '../Assets/Images/avryn.jpg'
import './Style.css'

function Productslarge() {

        const [position, setPosition] = useState(0)

        const slideLeft = () => {
            setPosition(Math.max(position - 1, 0)); 
          };
        
          const slideRight = () => {
            setPosition(Math.min(position + 1, 4)); 
          };
    
  return (
    <>
        <section className='product-container'>
            <div className='product-fluid'>
                <div className='products-header-flex'>
                    <div className='product-header'>
                        <p>Our Products</p>
                        <div className='product-underline'></div>
                    </div>
                    <div className='product-buttons-flex'>
                        <div className='accordan-arrow'>
                            <button onClick={slideLeft}><svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25px" viewBox="0 0 64 64" id="arrow"><path fill="#134563" d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"></path></svg></button>
                        </div>
                        <div className='accordan-arrow'>
                            <button onClick={slideRight}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="arrow"><path fill="#134563" d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7" transform="translate(237 335)"></path></svg></button>
                        </div>
                    </div>
                </div>
                <div className='products-cards' style={{ transform: `translateX(-${position * 100}%)` }}>

                    {
                        Array.from({length : 5}).map((_,index) =>(
                            <div className='product-card'>
                            <div className='product-card-image'>
                                <img src={Product1} alt="" />
                            </div>
                            <div className='products-category'>
                                <p>Shoes</p>
                            </div>
                            <div className='category-favorate'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                            </div>
                            <div className='product-name'>
                                <p>Avryn Shoes</p>
                            </div>
                            <div className='product-price'>
                                <p>$12,000</p> <p style={{opacity:"60%"}}><s>$10,000</s></p>
                            </div>
                        </div>
                        ))
                    }
                   

                    <div className='product-card'>
                        <div className='product-card-image'>
                            <img src={Product1} alt="" />
                        </div>
                        <div className='products-category'>
                            <p>Shoes</p>
                        </div>
                        <div className='category-favorate'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                        </div>
                        <div className='product-name'>
                            <p>Avryn Shoes</p>
                        </div>
                        <div className='product-price'>
                            <p>$12,000</p> <p style={{opacity:"60%"}}><s>$10,000</s></p>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-card-image'>
                            <img src={Product1} alt="" />
                        </div>
                        <div className='products-category'>
                            <p>Shoes</p>
                        </div>
                        <div className='category-favorate'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                        </div>
                        <div className='product-name'>
                            <p>Avryn Shoes</p>
                        </div>
                        <div className='product-price'>
                            <p>$12,000</p> <p style={{opacity:"60%"}}><s>$10,000</s></p>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-card-image'>
                            <img src={Product1} alt="" />
                        </div>
                        <div className='products-category'>
                            <p>Shoes</p>
                        </div>
                        <div className='category-favorate'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                        </div>
                        <div className='product-name'>
                            <p>Avryn Shoes</p>
                        </div>
                        <div className='product-price'>
                            <p>$12,000</p> <p style={{opacity:"60%"}}><s>$10,000</s></p>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-card-image'>
                            <img src={Product1} alt="" />
                        </div>
                        <div className='products-category'>
                            <p>Shoes</p>
                        </div>
                        <div className='category-favorate'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                        </div>
                        <div className='product-name'>
                            <p>Avryn Shoes</p>
                        </div>
                        <div className='product-price'>
                            <p>$12,000</p> <p style={{opacity:"60%"}}><s>$10,000</s></p>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-card-image'>
                            <img src={Product1} alt="" />
                        </div>
                        <div className='products-category'>
                            <p>Shoes</p>
                        </div>
                        <div className='category-favorate'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                        </div>
                        <div className='product-name'>
                            <p>Avryn Shoes</p>
                        </div>
                        <div className='product-price'>
                            <p>$12,000</p> <p style={{opacity:"60%"}}><s>$10,000</s></p>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-card-image'>
                            <img src={Product1} alt="" />
                        </div>
                        <div className='products-category'>
                            <p>Shoes</p>
                        </div>
                        <div className='category-favorate'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                        </div>
                        <div className='product-name'>
                            <p>Avryn Shoes</p>
                        </div>
                        <div className='product-price'>
                            <p>$12,000</p> <p style={{opacity:"60%"}}><s>$10,000</s></p>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-card-image'>
                            <img src={Product1} alt="" />
                        </div>
                        <div className='products-category'>
                            <p>Shoes</p>
                        </div>
                        <div className='category-favorate'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                        </div>
                        <div className='product-name'>
                            <p>Avryn Shoes</p>
                        </div>
                        <div className='product-price'>
                            <p>$12,000</p> <p style={{opacity:"60%"}}><s>$10,000</s></p>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-card-image'>
                            <img src={Product1} alt="" />
                        </div>
                        <div className='products-category'>
                            <p>Shoes</p>
                        </div>
                        <div className='category-favorate'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                        </div>
                        <div className='product-name'>
                            <p>Avryn Shoes</p>
                        </div>
                        <div className='product-price'>
                            <p>$12,000</p> <p style={{opacity:"60%"}}><s>$10,000</s></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Productslarge