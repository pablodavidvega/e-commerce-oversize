import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';
import CartWidget from '../CartWidgwet/CartWidget';

const NavBar = () => {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary navbar-ecommerce'>
        <Container>
          <div className='brand-cart'>
            <Navbar.Brand as={Link} to='/'>
              Api Productos SAS
            </Navbar.Brand>
            <CartWidget />
          </div>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='category/smartphones'>
              Smartphones
            </Nav.Link>
            <Nav.Link as={Link} to='category/laptops'>
              laptops
            </Nav.Link>
            <Nav.Link as={Link} to='category/fragrances'>
              fragrances
            </Nav.Link>
            <Nav.Link as={Link} to='category/groceries'>
              groceries
            </Nav.Link>
            <Nav.Link as={Link} to='category/home-decoration'>
              home-decoration
            </Nav.Link>
            <Nav.Link as={Link} to='category/furniture'>
              furniture
            </Nav.Link>
            <Nav.Link as={Link} to='category/beauty'>
              beauty
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
