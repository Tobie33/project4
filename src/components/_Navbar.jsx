import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function CompsLayoutsNavbar() {
  const { data: session } = useSession()

  return (
    <Navbar id="navbar" bg="light" expand="lg" className="d-block">
      <Container id="nav-bar-container" fluid className="mx-0">
        <Navbar.Toggle aria-controls="pages-nav" />
        <Navbar.Collapse id="pages-nav">
          <Nav className="flex-grow-1 justify-content-around">
            <Nav.Link href="/about">Store</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <Navbar.Brand as={Link} href="/" className="navbar-brand">
              Tara
            </Navbar.Brand>
            {session ? (
              <Nav.Link href="/profile">
                My Profile
              </Nav.Link>
            ) : (
              <Nav.Link href="#">About Us</Nav.Link>
            )}
            {session ? (
              <Nav.Link onClick={() => signOut({ callbackUrl: '/' })}>
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => signIn()}>Sign In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
