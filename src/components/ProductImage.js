import Wrapper from '../assets/wrapper/MainImage';
import { useSelector,useDispatch } from 'react-redux';
import img1 from "../assets/img/angle/Rectangle 89.png";
import img2 from "../assets/img/angle/Rectangle 90.png";
import img3 from "../assets/img/angle/Rectangle 91.png";
import img4 from "../assets/img/angle/Rectangle 92.png";
import img5 from "../assets/img/angle/Rectangle 93.png";
import img6 from "../assets/img/angle/Rectangle 94.png";
import { getImage } from '../feature/image/imageSlice';

const ProductImage = () => {
  const image = useSelector(getImage);
  return (
    <Wrapper>
      <div className="main_img">
        <img src={image} alt="product" />
      </div>
      <div className='angle_imgs'>
        <img src={img1} alt="ang-1" />
        <img src={img2} alt="ang-1" />
        <img src={img3} alt="ang-1"/>
        <img src={img4} alt="ang-1"/>
        <img src={img5} alt="ang-1"/>
        <img src={img6} alt="ang-1" />
      </div>
    </Wrapper>
  );
};

export default ProductImage;
