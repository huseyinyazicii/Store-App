import React from 'react';
import styles from './style.module.css';
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button } from '@chakra-ui/react';

const Login = () => {
    return (
        <Flex align={'center'} justify={'center'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Box rounded={'lg'} className={styles.container} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                        <Checkbox>Remember me</Checkbox>
                            <Button 
                                _hover={{opacity:0.8}}
                                bg='#2563eb'
                                color='#ffffff'
                                className={styles.button}>
                                Login
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Login;