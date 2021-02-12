import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import {} from 'react-icons'

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mb-5">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand to="/">The Dojo Blog</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className='mr-auto justify-content-between'>
                    {/* <Nav className="mr-auto"></Nav> */}
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link className="d-inline p-2">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/create">
                            <Nav.Link className="d-inline p-2">Create Blog</Nav.Link>
                        </LinkContainer>                            
                    </Nav>
                    <Nav>
                        <LinkContainer to="/login">
                            <Nav.Link className="d-inline p-2">
                                <Button variant="light">Login</Button>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Nav.Link className="d-inline p-2">
                                <Button variant="dark">SignUp</Button>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
