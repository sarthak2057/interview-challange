import React,{useEffect} from 'react';
import Wrapper from '../assets/wrapper/Main';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetail';
import QNA from '../components/QNA';
import { useSelector,useDispatch } from 'react-redux';
import { getProduct,fetchProduct ,getProductStatus} from '../feature/SingleProduct/ProductSlice';
import Loading from '../components/Loading';

const SingleProduct = () => {
  const dispatch = useDispatch();

  const product = useSelector(getProduct);
  const status = useSelector(getProductStatus);
  useEffect(()=>{
    dispatch(fetchProduct());
  },[dispatch]);



    if(status === 'loading'){
      return <Loading />
    }else{

    return (<Wrapper>
          <ProductDetail product={product} />
          <QNA />
          <Footer />
    </Wrapper>)
    }
};

export default SingleProduct;
