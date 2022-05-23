import React from 'react';
import styles from './style.module.css';
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Text } from '@chakra-ui/react';

const Signup = () => {
    return (
        <Flex align={'center'} justify={'center'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Box rounded={'lg'} className={styles.container} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="firstname" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="lastname" isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Text>Already have an account? Login here.</Text>
                            <Button 
                                _hover={{opacity:0.8}}
                                bg='#2563eb'
                                color='#ffffff'
                                className={styles.button}>
                                Sign Up
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Signup