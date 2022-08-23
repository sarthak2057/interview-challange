import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import Wrapper from '../assets/wrapper/ProductInfo';
import CartInfo from './CartInfo';
import { useDispatch } from 'react-redux';
import {changeImage} from '../feature/image/imageSlice';
import { PapasanChair } from '../data/iteminfo.js';
import img1 from '../assets/img/color/Rectangle 84.png';
import img2 from '../assets/img/color/Rectangle 85.png';
import img3 from '../assets/img/color/Rectangle 86.png';
import img4 from '../assets/img/color/Rectangle 87.png';
import img5 from '../assets/img/color/Rectangle 83.png';

const ProductInfo = ({product}) => {
  const dispatch = useDispatch();
  const {offer} = PapasanChair;
  return (
    <Wrapper>
      <div className="title">
        <h1>
          {product.title} <span className="badge">#1 in chairs</span>
        </h1>
        <button className='add-to-wish'><AiOutlineHeart /> Add to wishlist</button>
      </div>
      <hr />
      <div className="variant-info">
        <p>
          <strong>Options:</strong> Cream Cushion
        </p>
        <div className="variant-imgs">
          <img src={img5} alt="product-variant" onClick={()=>dispatch(changeImage(img5))} />
          <img src={img1} alt="product-variant" onClick={()=>dispatch(changeImage(img1))}/>
          <img src={img2} alt="product-variant" onClick={()=>dispatch(changeImage(img2))}/>
          <img src={img3} alt="product-variant" onClick={()=>dispatch(changeImage(img3))}/>
          <img src={img4} alt="product-variant" onClick={()=>dispatch(changeImage(img4))}/>
        </div>
      </div>
      <hr />
      <div className="pricing-info">
        <span className="mrp">$ 120</span>
        <div className="pricing-cart">
          <h2 className='sp'>$ {product.price}</h2>
          <CartInfo />
        </div>
        <div className="offer-info">
          <span className="offer">{offer}% off</span>
          <p className="save-info">You save: $ {Math.ceil(120-product.price )}</p>
        </div>
        <hr />
        <div className='about'>
          <h2>About the item</h2>
          <p>{product.description}</p>
          {/* {about.map((item,index)=>{
            return <li key={index}>{item}</li>
          })} */}
        </div>
        <div className='search-query'>
          <p>Search your queries related to this product</p>
          <div className='input-value'>
            <BiSearchAlt2 /><input value="" placeholder='Your questions' />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductInfo;
