import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from './navbar'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Rocky Fierro - Homepage</title>
            </Head>

            <Navbar path={router.path}/>

            <Container maxW="container.md" pt={20}>
                {children}
            </Container>
        </Box>  
    )
}

export default Main