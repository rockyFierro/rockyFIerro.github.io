import {
    Container,
    Box,
    Heading,
    Image,
    Button,
    Link
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../components/layouts/paragraph'
import Section from '../components/layouts/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/layouts/bio'
import Layout from '../components/layouts/article'


const Page = () => {
    return (
        <Layout>
            <Container >
                <Box borderRadius="lg" bg={useColorModeValue('#5e6745', '#e3eec0')} color={useColorModeValue('#e3eec0', '#5e6745')} mb={6} p={3} align='center'>
                    Hello, I&#39;m a full-stack developer based out of Portland, Oregon.
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1} >
                        <Heading as="h2" variant="page-title">
                            Rocky Fierro
                        </Heading>
                        <p> Web Technologies and Crafts ( Designer / Engineer / Artist ) </p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="120px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/rocky.png"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Rocky is a full stack engineer with a passion for accessability, end to end problem solving, and tinkering in animation software. 2022 finds him spending a lot of time developing audio and visual styling to enhance how information can be optimized and delivered to a wider audience. He is currently working on an{' '}
                        <NextLink href="/works/scribble-stadium">
                            <Link>educational application that promotes literacy.</Link>
                        </NextLink>
                    </Paragraph>
                    <Box
                        align="center"
                        my={4}
                    >
                        <NextLink href='/works'>
                            <Button rightIcon={<ChevronRightIcon />}
                                colorScheme="green"
                            > My Portfolio
                            </Button>
                        </NextLink>

                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Heading
                        as="h3"
                        variant="section-title"
                    >
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1982 -</BioYear>
                        Born in Montebello, California.
                    </BioSection>
                    <BioSection>
                        <BioYear>2005 -</BioYear>
                        Left Ca to make art and hunt UFO&#39;s in Portland, Or.
                    </BioSection>
                    <BioSection>
                        <BioYear>2016 -</BioYear>
                        Left the barista life for fatherhood and love.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 -</BioYear>
                        Graduated Bloom Institute of Technology.
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}


export default Page