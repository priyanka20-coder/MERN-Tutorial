import { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addToWish } from "./Redux/Slicer/WishlistSlicer";

export function ProductsListings() {
    const [current, setCurrent] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [data, setData] = useState([]);

    const PAGE_SIZE = 33;

    const url = `https://demohotelsapi.pythonanywhere.com/hotels?limit=${PAGE_SIZE}&skip=${PAGE_SIZE * current}`;

    async function dataFetch() {
        let res = await fetch(url);
        let hotelsData = await res.json();

        setTotalCount(hotelsData.count);
        setData(hotelsData.data);
    }

    useEffect(() => {
        dataFetch();
    }, [current]);

    let no_of_pages = Math.ceil(totalCount / PAGE_SIZE);

    function getPages() {
        if (no_of_pages <= 3) {
            return [...Array(no_of_pages).keys()];
        }

        if (current <= 1) {
            return [0, 1];
        }

        if (current >= no_of_pages - 3) {
            return [
                no_of_pages - 3,
                no_of_pages - 2,
                no_of_pages - 1,
            ];
        }

        return [current, current + 1];
    }

    const pages = getPages();

    return (
        <>
            <h1>Hotels</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px"}}>

                {data.map((el, index) => (
                    <Product key={index} all={el} id={el.id} name={el.name} thumbnail={el.thumbnail}
                        des={el.description} location={el.location} rating={el.rating} price={el.price} />
                ))}
            </div>

            <div
                style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    gap: "10px", margin: "30px", flexWrap: "wrap",
                }}
            >
                <button disabled={current === 0} onClick={() => setCurrent(current - 1)}>Previous</button>

                {pages.map((page) => (
                    <button key={page} onClick={() => setCurrent(page)} style=
                        {{
                            backgroundColor: current === page ? "dodgerblue" : "white",
                            color: current === page ? "white" : "black", padding: "8px 15px", border: "1px solid gray", cursor: "pointer"
                        }}> {page + 1}
                    </button>
                ))}

                {pages[pages.length - 1] < no_of_pages - 3 && (
                    <span>.....</span>
                )}

                {!pages.includes(no_of_pages - 2) && (
                    <button onClick={() => setCurrent(no_of_pages - 2)} style=
                        {{
                            backgroundColor: current === no_of_pages - 2 ? "dodgerblue" : "white",
                            color: current === no_of_pages - 2 ? "white" : "black", padding: "8px 15px", border: "1px solid gray", cursor: "pointer",
                        }}> {no_of_pages - 1}
                    </button>
                )}

                {!pages.includes(no_of_pages - 1) && (
                    <button onClick={() => setCurrent(no_of_pages - 1)} style=
                        {{
                            backgroundColor: current === no_of_pages - 1 ? "dodgerblue" : "white",
                            color: current === no_of_pages - 1 ? "white" : "black", padding: "8px 15px", border: "1px solid gray", cursor: "pointer",
                        }}> {no_of_pages}
                    </button>
                )}

                <button disabled={current === no_of_pages - 1} onClick={() => setCurrent(current + 1)}>Next</button>
            </div>
        </>
    );
}

export function Product({ all, id, name, thumbnail, des, location, rating, price, }) {

    const navigate = useNavigate();

    function toDetail(id) {
        navigate(`/detail/${id}`);
    }

    let dispatch = useDispatch()
    return (
        <div style={{ display: "flex", gap: "20px", border: "2px dashed black", padding: "30px", borderRadius: "30px" }}>

            <div onClick={() => { toDetail(id) }}>
                <img width="300px" height="250px" src={thumbnail} alt="" />
            </div>

            <div style={{ display: "flex", gap: "20px", flexDirection: "column", textAlign: "left" }}>
                <h2 onClick={() => { toDetail(id) }}>{name}</h2>
                <p onClick={() => { toDetail(id) }}>{des.slice(0, 200)}...</p>

                <div style={{ display: "flex", justifyContent: "space-between", }}>
                    <p>Location : {location}</p>
                    <p><StarRating rating={rating} /></p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", }}>
                    <p>Price : {price}</p>
                    <button style={{ backgroundColor: "#111735", color: "white", border: "none", padding: "15px 20px" }}
                        onClick={() => {
                            dispatch(addToWish(all))
                            navigate("/wishlist")
                        }}>
                        Move to WishList
                    </button>
                </div>
            </div>
        </div>
    );
}

function StarRating({ rating }) {
    let stars = [];

    for (let i = 1; i <= Math.ceil(rating); i++) {
        stars.push(<IoStarSharp key={i} color="yellow" />);
    }
    return stars;
}

export function SearchHotel() {

    const { state } = useLocation();

    const [searchData, setSearchData] = useState([]);

    if (!state) {
        return <h2>No Search Data Found</h2>;
    }

    let url = `https://demohotelsapi.pythonanywhere.com/hotels?search=${state.location}`;

    async function searchFetch() {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);

        setSearchData(data.data);
    }

    useEffect(() => {
        searchFetch();
    }, []);

    return (
        <>
            <h1>Searched Hotel</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                }}
            >
                {searchData.length > 0 ? (
                    searchData.map((el) => (
                        <Product
                            key={el.id}
                            all={el}
                            id={el.id}
                            name={el.name}
                            thumbnail={el.thumbnail}
                            des={el.description}
                            location={el.location}
                            rating={el.rating}
                            price={el.price}
                        />
                    ))
                ) : (
                    <h2>No Hotel Found</h2>
                )}
            </div>
        </>
    );
}