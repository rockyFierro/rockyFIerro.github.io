import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Title,
    WorkImage,
    Meta
} from '../../components/layouts/work'
import P from '../../components/layouts/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'

const Work = () => {
    return (
        <Layout
            title="Scribble-Stadium"
        >
            <Container>
                <Title>
                    Audrey <Badge>2022</Badge>
                </Title>
                <P>
                    Audrey-II is an app that will help those who love their plants, care for their plants.
                </P>
                <P>
                    Built on top of React, Redux and Express. The app was live for a short time before the original team
                    decided to pull the back end and begin prototyping a new version that utilizes rasperry pi (zero) and a 'Plant Pot Moisture Sensor' to monitor moisture and notify the user via a frontend digital pet game.
                </P>
                <P>
                    Future updates will be ongoing in a {' '}
                    <NextLink href="/posts">
                        <Link>special dev blog.</Link>
                    </NextLink>
                </P>
            </Container>

        </Layout>
    )
}

export default Work