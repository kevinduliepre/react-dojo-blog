import { Navbar, Nav, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" className="mb-5">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand to="/">The Dojo Blog</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link className="d-inline p-2">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/create">
                            <Nav.Link className="d-inline p-2">Create Blog</Nav.Link>
                        </LinkContainer>                            
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
