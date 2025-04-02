import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import "./Navbar.css"

const MyNavbar = () => {
    const navBar = [
        {
            id: "Product",
            title: "Product",
        },
        {
            id: "Cart",
            title: "Cart",
        },
    ];

    const items = useSelector((state) => state.cart.cartItems);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <Navbar>
                <Container className='Container'>
                    <Navbar.Brand href="#">Paradise Nursery</Navbar.Brand>
                    <Nav>
                        {navBar.map((item) => (
                            <Nav.Link key={item.id} href={`#${item.id}`}>
                                <>
                                    {item.id === "Cart" ? (
                                        <>
                                            <i className="bi bi-cart-fill" style={{ marginRight: "6px" }}></i>
                                            {item.title}
                                            <span className="cart-badge">{totalItems}</span>
                                        </>
                                    ) : (
                                        item.title
                                    )}
                                </>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default MyNavbar;