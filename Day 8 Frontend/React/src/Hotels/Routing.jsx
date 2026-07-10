import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar.jsx'
import Home from './Pages/Home.jsx'
import { ProductsListings, SearchHotel } from './Hotels.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Contact from './Pages/Contact.jsx'
import HotelDetail from './Pages/HotelDetail.jsx'
import IG from './Pages/Children/IG.jsx'
import TP from './Pages/Children/TP.jsx'
import FB from './Pages/Children/FB.jsx'
import NotFound from './Pages/NotFound.jsx'

export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/allHotels' element={<ProductsListings />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/contact' element={<Contact />} >
                        <Route path='tp' element={<TP />} />
                        <Route path='ig' element={<IG />} />
                        <Route path='fb' element={<FB />} />
                    </Route>
                    <Route path='/detail/:id' element={<HotelDetail />} />
                    <Route path='*' element={<NotFound/>} />
                    <Route path='/search' element={<SearchHotel />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}