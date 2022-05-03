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

const Work = () => {
    return (
        <Layout
            title="Scribble-Stadium"
        >
            <Container>
                <Title>
                    Scribble Stadium <Badge>2022</Badge>
                </Title>
                <P>
                    An education web app aimed at promoting creativity and literacy
                    in children. Weekly chapters are given to the children via the app
                    after which they will have the opportunity to write and illustrate their
                    own fan-fiction contributing to a shared world-building experience.
                    Every week the kids will have the chance to share their feelings on their
                    work and their cohorts.
                </P>
                <P>
                    The front end takes advantage of React&#39;s declarative component-based
                    system to create modular pieces of something much larger. This project has over
                    100+ contributors working with Ant Design&#39;s React UI library leveraging approximately
                    60 base components. 
                </P>
            </Container>

        </Layout>
    )
}

export default Work