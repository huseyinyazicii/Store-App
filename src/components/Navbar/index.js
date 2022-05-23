import styles from './style.module.css';
import { Box, Flex, HStack, IconButton, useDisclosure, Stack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavLinks from './NavLinks';
  
const Links = ['All', 'Electronics', 'Jewelery', "Men's Clothing", "Women's Clothing"];

const Navbar = () => {  
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className={styles.seperator} />
            <Box  px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'center'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        className={styles.icon}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={12}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLinks key={link} >{link}</NavLinks>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                    {Links.map((link) => (
                        <NavLinks key={link} >{link}</NavLinks>
                    ))}
                    </Stack>
                </Box>
                ) : null}
            </Box>
            <div className={styles.seperator}  />
        </>
    );
}

export default Navbar;