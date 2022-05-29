import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { default as S } from './SharedLayout.styled';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { cartSlice } from '../store';


const SharedLayout: React.FC = () => {
    const navigate = useNavigate();
    const categories = useSelector((state: RootState) => state.shop.categories);
    const firstFiveCategories = categories.slice(0, 5);
    const cartCount = useSelector((state: RootState) => Object.keys(state.cart.products).length);
    const goToCategoryThroughSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        navigate(`/category/${value}`);
        e.target.value = '';
    }

    const goToCart = () => {
        navigate('/cart');
    }

    return (
        <div>
            <header>
                <S.Navbar>
                    <h1>
                        <Link to="/">
                            Redux Shop
                        </Link>
                    </h1>
                    <ul>
                        {
                            firstFiveCategories.map((category: string, index: number) =>
                                <li key={index}>
                                    <Link to={`/category/${category}`}>{category}</Link>
                                </li>
                            )
                        }
                        <select onChange={goToCategoryThroughSelect} defaultValue={''}>
                            <option disabled value=''>More...</option>
                            {
                                categories.slice(5).map((category: string, index: number) =>
                                    <option key={index}>
                                        {category}
                                    </option>
                                )
                            }
                        </select>
                    </ul>
                    <div>
                        <RiShoppingCart2Line />
                        <S.CartCountBadge empty={cartCount < 1}>
                            {cartCount}
                        </S.CartCountBadge>
                    </div>
                </S.Navbar>
            </header>
            <main>
                <S.Wrapper>
                    <Outlet />
                </S.Wrapper>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default SharedLayout;