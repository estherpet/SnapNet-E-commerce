import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartAction';

const IconButton = ({ onClick, children }) => {
    return (
        <button className='amount-btn' onClick={onClick}>
            {children}
        </button>
    );
};

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increase({ id }));
    };

    const handleDecrease = () => {
        if (amount === 1) {
            dispatch(removeItem(id));
        } else {
            dispatch(decrease({ id }));
        }
    };

    const handleRemove = () => {
        dispatch(removeItem(id));
    };

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button className='remove-btn' onClick={handleRemove}>
                    remove
                </button>
            </div>
            <div>
                <IconButton onClick={handleIncrease}>
                    <ChevronUp />
                </IconButton>
                <p className='amount'>{amount}</p>
                <IconButton onClick={handleDecrease}>
                    <ChevronDown />
                </IconButton>
            </div>
        </article>
    );
};

export default CartItem;
