import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>E-commerce Product Page</h3>
          <div className='nav-container'>
            <CartIcon />
            </div>
          </div>
      </nav>
    </>
  );
};
export default Navbar;
