import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const favoriteItems = useSelector((state) => state.favorite.items);

    return (
        <Flex className={styles.container} minWidth='max-content' alignItems='center' gap='2'>
            <Box>
                <Link to="/">
                    <Heading className={styles.logo} size='lg'>HY STORE</Heading>
                </Link>
            </Box>
            <Spacer />
            <ButtonGroup gap='2' size='sm' variant='outline'>
                <Link to='/cart' className={styles.icon}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    { cartItems.length > 0 ? <div className={styles.badge}>{cartItems.length}</div> : undefined}
                </Link>
                <Link to='/favorites' className={styles.icon}>
                    <FontAwesomeIcon icon={faHeart} />
                    { favoriteItems.length > 0 ? <div className={styles.badge}>{favoriteItems.length}</div> : undefined}
                </Link>
                <Link to="/login">
                    <Button className={styles.button} colorScheme='red' _hover={{bg:'#c53030', color:'#fff'}}>Log in</Button>
                </Link>
                <Link to="/signup">
                    <Button className={styles.button} colorScheme='red' _hover={{bg:'#c53030', color:'#fff'}}>Sign Up</Button>
                </Link>
            </ButtonGroup>
        </Flex>
    );
}

export default Header;