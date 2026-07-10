import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";

export default function HotelDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [hotel, setHotel] = useState(null);

    async function fetchHotel() {
        const res = await fetch(
            `https://demohotelsapi.pythonanywhere.com/hotels/${id}`
        );

        const result = await res.json();

        setHotel(result.data);
    }

    useEffect(() => {
        fetchHotel();
    }, []);

    if (!hotel) {
        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    }

    return (
        <div
            style={{
                width: "80%",
                margin: "30px auto",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
            }}
        >
            <h1>Hotel Detail</h1>
            <img
                src={hotel.thumbnail}
                alt=""
                style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "20px",
                }}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >

                <div>
                    <h1>{hotel.name}</h1>

                    <p
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            fontSize: "20px",
                        }}
                    >
                        Location: {hotel.location}
                    </p>
                </div>

                <div
                    style={{
                        padding: "20px",
                        borderRadius: "15px",
                        textAlign: "center",
                    }}
                >
                    <h2>Price: {hotel.price}</h2>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "22px",
                }}
            >
                <IoStarSharp color="gold" />
                <span>{hotel.rating} / 5</span>
            </div>

            <div>
                <h2>Description</h2>

                <p
                    style={{
                        lineHeight: "30px",
                        fontSize: "18px",
                        textAlign: "justify",
                    }}
                >
                    {hotel.description}
                </p>
            </div>
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
                    cursor: "pointer",
                    fontSize: "20px",
                }}
            >
                More Hotels
            </button>
        </div >
    );
}