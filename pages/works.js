import {
    Container,
    Box,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import scribblePlaceholder from '../public/images/scribblePlaceholder.png'
import audreyPlacholder from '../public/images/audreyPlaceholder.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>

            <Container>
                <Heading
                    as="h3"
                    fontSize={20}
                    mb={4}
                >
                    Works
                </Heading>

                <SimpleGrid
                    columns={[1, 1, 2]}
                    gap={6}
                >
                    <Section>
                        <WorkGridItem
                            id="scribble-stadium"
                            title="Scribble Stadium"
                            thumbnail={scribblePlaceholder}
                        >
                            The goal of Story Squad is to turn “reluctant readers” into authors and illustrators through a collaborative world-building game.
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem
                            id="audrey2"
                            title="Audrey II"
                            thumbnail={audreyPlacholder}
                        >
                            The goal of Story Squad is to turn “reluctant readers” into authors and illustrators through a collaborative world-building game.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works