import { Box } from '@chakra-ui/react';
import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const Rating = ({ rating, numReviews }) => {
    return (
        <div style={{display:'flex', flexDirection: 'row'}}>
            {
                Array(5).fill('').map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1) {
                        return (
                        <BsStarFill
                            key={i}
                            style={{ marginLeft: '1' }}
                            color='#FDE047'
                        />
                        );
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf color='#FDE047' key={i} style={{ marginLeft: '1' }} />;
                    }
                    return <BsStar color='#FDE047' key={i} style={{ marginLeft: '1' }} />;
                    })
            }
            <Box as="span" ml="2" color="gray.600" style={{fontSize:"12px"}}>
                ({numReviews}) review{numReviews > 1 && 's'}
            </Box>
        </div>
    );
}

export default Rating;