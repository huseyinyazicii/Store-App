import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import CartDetail from './CartDetail';
import styles from './style.module.css';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    let total = 0;
    cartItems.map((item) => total += item.price);

    return (
        <div className={styles.container}>
            {
                cartItems.length > 0 
                ? <>
                    <div className={styles.product_container}>
                        {
                            cartItems.map((item) => (
                                <div className={styles.product} key={item.id}>
                                    <CartItem product={item} />
                                </div>
                            ))
                        }
                    </div>
                    <CartDetail total={total} />
                </>
                : <div className={styles.noItems}>
                    <p className={styles.description1}>There is no product in your favorites.</p>
                    <p className={styles.description2}>Add the products you like to your favorites to buy them later.</p>
                    <Link to='/'><button className={styles.button}>Continue Shopping</button></Link>
                </div>
            }
        </div>
    );
}

export default Cart;