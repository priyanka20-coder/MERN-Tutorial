import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Navbar() {

    const data = useSelector((state) => state.wishlist.value);
    const linkStyle = {
        color: "white",
        textDecoration: "none",
    };
    console.log(data)
    return (
        <>
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                backgroundColor: "#111735", color: "white", textDecoration: "none",
                padding:"10px", borderBottom:"4px solid white"
            }}>

                <h1><Link to="/" style={linkStyle}>Logo</Link></h1>

                <div style={{ display: "flex", gap: "30px", fontSize: "1.4rem" }}>

                    <Link to="/allHotels" style={linkStyle}>Hotels</Link>

                    <Link to="/wishlist" style={linkStyle}>Wishlist
                        <span style={{
                            padding: "0px 15px", color: "white",backgroundColor: "#0f132a"
                        }}>{data.length}
                        </span>
                    </Link>

                    <Link to="/contact" style={linkStyle}>Contact</Link>

                    <Link to="" style={linkStyle}>Sign In</Link>
                </div>
            </div>
        </>
    )
} 