import React from 'react';
import styles from './style.module.css';

const CartDetail = ({total}) => {
    return (
        <div className={styles.cartDetail_container}>
            <div className={styles.cartDetail}>
                <h4>Order Summary</h4>
                <div>
                    <span className={styles.alt}>Subtotal</span>
                    <span className={styles.price}>$ {total}</span>
                </div>
                <div>
                    <span className={styles.alt}>Shipping Estimate</span>
                    <span className={styles.price}>$ 5</span>
                </div>
                <div>
                    <span className={styles.alt}>Tax Estimate</span>
                    <span className={styles.price}>$ 5</span>
                </div>
                <div>
                    <span>Order Total</span>
                    <span className={styles.price}>$ {(total+10).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

export default CartDetail;