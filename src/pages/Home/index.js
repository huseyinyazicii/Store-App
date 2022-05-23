import React, { useEffect } from 'react';
import styles from './style.module.css';
import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../redux/products/productsSlice';
import { Spinner } from '@chakra-ui/react';

const Home = ({category}) => {
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsAsync(category));
    }, [dispatch, category]);

    return (
        <div className={styles.container}>
            {
                status === "loading" 
                ? <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl' /> 
                : products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
}

export default Home;