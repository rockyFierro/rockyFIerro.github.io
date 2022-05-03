import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/section'
import { GridItem } from '../components/layouts/grid-item'
import audrey from '../public/images/audrey.jpeg'
import P from '../components/layouts/paragraph' 

const Posts = () => {
    return (
        <Layout title="Posts">
            <Container>
                <Heading
                    as="h4"
                    fontSize={20}
                    mb={4}
                >
                    Popular Posts
                </Heading>

                <Section delay={0.1}>
                    <SimpleGrid
                        columns={[1, 2, 2]}
                        gap={6}
                    >
                        <GridItem
                            title="Audrey 3"
                            thumbnail={audrey}
                            alt="A very hungry plant."
                            href="https://github.com/rockyFierro/audrey3"
                        >
                        <P> Water your plants by feeding your virtual pet! (and Rasberry Pi, React and a bit of Python.)</P>
                        </GridItem>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Posts