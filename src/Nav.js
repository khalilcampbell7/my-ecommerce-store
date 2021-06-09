import { Link } from 'react-router-don'

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
                <Link to="/checkout_page">
                    <li>Checkout</li>
                </Link>
                <Link to="/product_page">
                    <li>Individual Product</li>
                </Link>
                <Link to="/products">
                    <li>All Products</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;