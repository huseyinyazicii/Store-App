import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import styles from './style.module.css';

const Favorites = () => {
    const favoriteItems = useSelector((state) => state.favorite.items);

    return (
        <div className={styles.container}>
            {
                favoriteItems.length > 0
                ? favoriteItems.map((product) => <ProductCard key={product.id} product={product} />) 
                : <div className={styles.noItems}>
                    <p className={styles.description1}>There is no product in your favorites.</p>
                    <p className={styles.description2}>Add the products you like to your favorites to buy them later.</p>
                    <Link to='/'><button className={styles.button}>Continue Shopping</button></Link>
                </div>
            }
        </div>
    );
}

export default Favorites;