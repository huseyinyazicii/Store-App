import { Spinner } from '@chakra-ui/react';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from '../../components/ProductCard/Rating';
import { addProductToCart, deleteProductFromCart } from '../../redux/cart/cartSlice';
import { addProductToFavorite, deleteProductFromFavorite } from '../../redux/favorite/favoriteSlice';
import styles from './style.module.css';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [checkCart, setChechCart] = useState(false);    
    const [checkFavorite, setCheckFavorite] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_URL}products/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [id])

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
        <div className={styles.container}>
            {
                error !== "" ? error : loading 
                ? <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl' /> 
                : <>
                    <div className={styles.image}>
                        <img alt={product.title} src={product.image} />
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.title}>{product.title}</div>
                        <Rating rating={product.rating.rate} numReviews={product.rating.count} />
                        <div className={styles.description}>{product.description}</div>
                        <div className={styles.sub}>
                            <div className={styles.price}>${product.price}</div>
                            <div className={styles.end}>
                                <button onClick={handleClick} className={!checkCart ? styles.btn1 : styles.btn2}>
                                    <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
                                    {!checkCart ? "Add to Cart" : "Remove From Cart"}
                                </button>
                                <FontAwesomeIcon onClick={handleFavorite} className={styles.heart_icon} icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default ProductDetails;