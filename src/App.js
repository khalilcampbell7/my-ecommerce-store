import logo from './logo.svg';
import './App.css';
import home from './Home.js'
import Checkout from './Checkout.js'
import Cart from './Cart.js'
import IndividualProducts from './IndividualProducts.js'
import Products from './Products.js'
import Nav from './Nav.js'


const App = () => {
  return (
    <Rounter>
      <Nav />
      <Route path="home" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout_page" component={CheckoutPage} />
      <Route path="/products" component={Products} />
    </Rounter>
  )

}

export default App;
