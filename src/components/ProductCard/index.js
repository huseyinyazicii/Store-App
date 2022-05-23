import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart, deleteProductFromCart } from '../../redux/cart/cartSlice';
import { addProductToFavorite, deleteProductFromFavorite } from '../../redux/favorite/favoriteSlice';
import Rating from './Rating';
import styles from './style.module.css';

const ProductCard = ({product}) => {
    const [checkCart, setChechCart] = useState(false);    
    const [checkFavorite, setCheckFavorite] = useState(false);

    const cartItems = useSelector((state) => state.cart.items);
    const favoriteItems = useSelector((state) => state.favorite.items);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const check = cartItems.filter((item) => item.id === product.id);
        if(check.length > 0){
            setChechCart(true);
        }
        const check2 = favoriteItems.filter((item) => item.id === product.id)
        if(check2.length > 0){
            setCheckFavorite(true);
        }
    }, [product, cartItems, favoriteItems]);
    
    const handleClick = () => {
        if(checkCart)
            dispatch(deleteProductFromCart(product.id));
        else
            dispatch(addProductToCart(product))
        setChechCart(!checkCart);
    }

    const handleFavorite = () => {
        if(checkFavorite)
            dispatch(deleteProductFromFavorite(product.id));
        else
            dispatch(addProductToFavorite(product))
        setCheckFavorite(!checkFavorite);
    }

    return (
        <div className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.heart}>
                    <FontAwesomeIcon className={styles.heart_icon} icon={faHeart} onClick={handleFavorite} />
                </div>
                <div className={styles.img}>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.title} />
                    </Link>
                </div>
                <div className={styles.body}>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.rating}>
                        <Rating rating={product.rating.rate} numReviews={product.rating.count} />
                    </div>
                    <div className={styles.price}><span>$</span>{product.price}</div>
                    <button className={!checkCart ? styles.btn1 : styles.btn2} onClick={handleClick}>
                        <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
                        {!checkCart ? "Add to Cart" : "Remove From Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;