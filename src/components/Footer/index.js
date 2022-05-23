import React from 'react';
import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialButton = ({children, label, href,}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'7xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2022 Created By Hüseyin Yazıcı</Text>
                <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Github'} href={'https://github.com/huseyinyazicii'}>
                    <FaGithub />
                </SocialButton>
                <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/h%C3%BCseyin-yaz%C4%B1c%C4%B1-14b803201/'}>
                    <FaLinkedin />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'https://www.instagram.com/huseyinyazc/'}>
                    <FaInstagram />
                </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;