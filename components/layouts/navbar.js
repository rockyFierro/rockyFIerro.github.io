import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('#0f2a3f', '#5e6745')
    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#5e6745' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#aeba89', '#aeba89')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex
                    align="center"
                    mr={5}
                >
                    <Heading
                    color="#5e6745"
                        as="h1"
                        size="lg"
                        fontSize="large"
                        letterSpacing={'tighter'}
                    >
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem
                        href="/works"
                        path={path}
                    >
                        Works
                    </LinkItem>
                    <LinkItem
                        href="/posts"
                        path={path}
                    >
                        Posts
                    </LinkItem>
                </Stack>
                <Box
                    flex={1}
                    align="right"
                >
                    <ThemeToggleButton/>
                    <Box
                        ml={2}
                        display={{ base: "inline-block", md: "none" }}
                    >
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>                                <NextLink href="/Posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
