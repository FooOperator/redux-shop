import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { MdAddShoppingCart } from 'react-icons/md';
import { cartSlice } from '../store';

const { addProduct } = cartSlice.actions;

const Home: React.FC = () => {
  const lowInStock = useSelector((state: RootState) => state.shop.products.filter(([product, count], index) => count < 10));
  const dispatch = useDispatch();

  const handleAddToCart = (productId: string) => {
    dispatch(addProduct(productId));
  }

  return (
    <section>
      <div>
        <h2>Low In Stock</h2>
        <ul>
          {
            lowInStock.map(([product, count], index) =>
              <li key={index}>
                <MdAddShoppingCart onClick={() => handleAddToCart(product.id)} />
                <Link to={`/product/${product.id}`}>
                  {product.name}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default Home