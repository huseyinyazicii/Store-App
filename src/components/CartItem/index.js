import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.css';
import { deleteProductFromCart } from '../../redux/cart/cartSlice';
import { Link } from 'react-router-dom';


const CartItem = ({product}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteProductFromCart(product.id))
    }

    return (
        <div className={styles.card}>
            <img alt={product.title} src={product.image} className={styles.image} />
            <div className={styles.body}>
                <div>
                    <div className={styles.top}>
                        <div>{product.category}</div>
                        <FontAwesomeIcon onClick={handleClick} icon={faTrashCan} />
                    </div>
                    <Link to={`/product/${product.id}`} className={styles.title}>{product.title}</Link>
                </div>
                <div className={styles.price}>$ {product.price}</div>
            </div>
        </div>
    );
}

export default CartItem;