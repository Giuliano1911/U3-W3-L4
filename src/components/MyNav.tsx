import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      data-bs-theme="light"
      sticky="top"
    >
      <Container fluid>
        <Link to={'/'} className="navbar-brand">
          Spaceflight 🚀
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-center ms-auto">
            <Link className="nav-link" to={'/'}>
              Home
            </Link>
            <Link className="nav-link" to={'/'}>
              Home
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
