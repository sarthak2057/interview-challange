import Wrapper from "../assets/wrapper/CartInfo";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from "../feature/Counter/CounterSlice";


const CartInfo = () => {
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  return (
    <Wrapper>
        <p>Quantity</p>
        <div className='product-quantity'>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(increment())}>+</button>
            <a href="#" className="add-cart"><AiOutlineShoppingCart /> <p>Add to cart</p></a>
        </div>
    </Wrapper>
  )
}

export default CartInfo