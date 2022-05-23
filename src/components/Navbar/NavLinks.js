import { Box } from '@chakra-ui/react';
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import styles from './style.module.css';

const NavLinks = ({ children }) => {

    let { pathname } = useLocation();

    pathname = pathname.substring(1);
    const newChlidren = children.replace(/\s/g, '%20');

    if(children === "All" && (pathname === "" || pathname === "/"))
        pathname = "All";

    return (
        <NavLink to={children === "All" ? "" : children} >
            <Box px={2} py={1} rounded={'md'}
                href={'#'}
                _hover={{textDecoration: "none"}}
                className={`${styles.link_item} ${pathname === newChlidren ? styles.active : undefined}`}>
                {children}
            </Box>
        </NavLink>
    )
}

export default NavLinks