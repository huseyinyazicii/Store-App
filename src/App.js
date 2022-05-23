import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
    return (
        <div className="home">
            <BrowserRouter>
                <div>
                    <Header />
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home category="" />} />
                        <Route path='/jewelery' element={<Home category="jewelery"  />} />
                        <Route path='/electronics' element={<Home category="electronics" />} />
                        <Route path={`Men's%20Clothing`} element={<Home category="men's clothing" />} />
                        <Route path={`Women's%20Clothing`} element={<Home  category="women's clothing"/>} />
                        <Route path="/product/:id" element={ <ProductDetails /> } />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/favorites' element={<Favorites />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
