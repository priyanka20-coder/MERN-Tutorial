import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    let [status, setStatus] = useState(false);

    let [location, setLocation] = useState("");
    let [checkIn, setCheckIn] = useState("");
    let [checkOut, setCheckout] = useState("");
    let [adults, setAdults] = useState(1);
    let [children, setChildren] = useState(0);
    let [room, setRooms] = useState(1);

    let navigate = useNavigate()

    const searchData = {
        location,
        checkIn,
        room,
        checkOut,
        adults,
        children,
        //timeStamp: new timeStamp
    }

    const cardStyle = {
        width: "30%",
        height: "250px",
        border: "1px solid lightgray",
        borderRadius: "20px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",

    };
    return (
        <>
            <div
                style={{
                    backgroundImage: "url('https://media.istockphoto.com/id/1624395436/photo/luxury-classical-style-elegancer-black-living-room-interior-3d-render.jpg?s=2048x2048&w=is&k=20&c=k997dt0NSDijjWY_cxAScXS_6IFJYtUWsZslpkcqjrw=')",
                    backgroundSize: "cover", height: "500px", backgroundPosition: "center", display: "flex",
                    flexDirection: "column", justifyContent: "center", alignItems: "center",
                }}>

                <h1 style={{ color: "white", marginBottom: "40px", fontSize: "80px" }}>StayFinder</h1>

                <h2 style={{ color: "white", padding: "40px" }}> Here you will find all the hotels according to your convenince. </h2>

                <div
                    style={{
                        width: "85%",
                        backgroundColor: "white",
                        borderRadius: "60px",
                        padding: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            borderRight: "1px solid lightgray",
                            padding: "0px 20px",
                        }}
                    >
                        <label>Location : </label>
                        <br />

                        <input
                            type="text"
                            placeholder="Enter Your Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style={{
                                border: "1px dashed black",
                                width: "100%",
                                fontSize: "18px",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            borderRight: "1px solid lightgray",
                            padding: "0px 10px",
                        }}
                    >
                        <label>Check In</label>
                        <br />

                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            style={{
                                border: "none",
                                fontSize: "18px",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            borderRight: "1px solid lightgray",
                            padding: "0px 10px",
                        }}
                    >
                        <label>Check Out</label>
                        <br />

                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckout(e.target.value)}
                            style={{
                                border: "none",
                                fontSize: "18px",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            flex: 1,
                            padding: "0px 20px",
                            position: "relative"
                        }}
                    >
                        <label>Details : </label>

                        <p
                            onClick={() => {
                                setStatus(!status);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            Add Guest Details
                        </p>

                        {status && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "60px",
                                    backgroundColor: "white",
                                    width: "250px",
                                    padding: "20px",
                                    borderRadius: "10px",
                                    border: "1px dashed black"
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>Adults</div>

                                    <div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (adults > 1) setAdults(adults - 1);
                                            }}
                                        >
                                            -
                                        </button>

                                        <span>{adults}</span>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setAdults(adults + 1);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>Children</div>

                                    <div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (children > 0)
                                                    setChildren(children - 1);
                                            }}
                                        >
                                            -
                                        </button>

                                        <span>{children}</span>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setChildren(children + 1);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>Rooms</div>

                                    <div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (room > 1)
                                                    setRooms(room - 1);
                                            }}
                                        >
                                            -
                                        </button>

                                        <span>{room}</span>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setRooms(room + 1);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Search */}

                    <button
                        onClick={() => {
                            navigate("/search", { state: searchData });
                        }}
                        style={{
                            backgroundColor: "#10163f",
                            color: "white",
                            border: "none",
                            borderRadius: "40px",
                            padding: "18px 40px",
                            fontSize: "20px",

                        }}
                    >
                        Search
                    </button>
                </div>
            </div>

            <h3>Hotels Gallery</h3>


            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                    width: "80%",
                    padding: "5px 60px",
                }}
            >
                <div style={cardStyle}>
                    <img height={"100%"} src="https://media.istockphoto.com/id/641448082/photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-sunshine.jpg?s=2048x2048&w=is&k=20&c=OdL2kkTHqmwnLFBqkPZr-gXL6T7AIGxteMvwmi6iySs=" />
                </div>

                <div style={cardStyle}>
                    <img height={"100%"} src="https://media.istockphoto.com/id/146753772/photo/resort-in-cancun-shown-in-the-daytime-from-the-air.jpg?s=2048x2048&w=is&k=20&c=2SF7Vb2driG-vn1dUEwwJDeogsotyIvyTeiTKBUqsh8=  " />
                </div>

                <div style={cardStyle} >
                    <img height={"100%"} src="https://media.istockphoto.com/id/907614450/photo/luxury-resort-hotel-with-swimming-pool-at-sunset.jpg?s=2048x2048&w=is&k=20&c=tWJEji-fPc2JRgvpIyYCSPfH8Wm3yif0YALisi08tX4=" />
                </div>
            </div>
            <div
                style={{
                    backgroundColor: "#0f132a",
                    color: "white",
                    padding: "50px 80px",
                    marginTop: "50px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "40px",
                    }}
                >
                    <div>
                        <h2>StayFinder</h2>
                        <p style={{ width: "280px", lineHeight: "25px" }}>
                            Find your perfect stay anywhere in India.
                            Book hotels at the best prices with
                            comfort and convenience.
                        </p>
                    </div>

                    <div>
                        <h3>Quick Links</h3>
                        <p>Home</p>
                        <p>Hotels</p>
                        <p>Wishlist</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <p>Mathura, India</p>
                        <p>92338888676</p>
                        <p>xyz@gmail.com</p>
                    </div>
                    <div>
                        <h3>Follow Us</h3>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                </div>

                <hr
                    style={{
                        margin: "30px 0",
                        border: "2px solid gray",
                    }}
                />

                <p
                    style={{
                        textAlign: "center",
                        margin: 0,
                    }}
                >
                    © 2026 StayFinder. All Rights Reserved.
                </p>
            </div>

        </>
    );
}