import { Navbar, Nav, Container } from "react-bootstrap";
const MyNav = () => {
  return (
    <>
      <Navbar className="bg-dark w-100 mx-0 fixed-top " expand="lg">
        <Container fluid="md">
          <Navbar.Brand className="text-info " href="#">
            MyNav
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto">
              <Nav.Link className="text-info" href="#">
                Home
              </Nav.Link>
              <Nav.Link className="text-info" href="#">
                About
              </Nav.Link>
              <Nav.Link className="text-info" href="#">
                Browse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
