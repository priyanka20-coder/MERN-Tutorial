// import { useEffect, useState } from "react";
// import { IoStarSharp } from "react-icons/io5";

// export function UseEffect() {
//     const [count, setCount] = useState(0);
//     const [count1, setCount1] = useState(10);

//     return (
//         <>
//             <h1>Use Effect</h1>

//             <div>
//                 <button onClick={() => setCount(count + 1)}>
//                     Increase Count
//                 </button>

//                 <button onClick={() => setCount1(count1 + 1)}>
//                     Increase Count1
//                 </button>
//             </div>
//         </>
//     );
// }

// export function ProductsListings() {
//     const [current, setCurrent] = useState(0);
//     const [totalCount, setTotalCount] = useState(0);
//     const [data, setData] = useState([]);

//     const PAGE_SIZE = 33;

//     const url = `https://demohotelsapi.pythonanywhere.com/hotels?limit=${PAGE_SIZE}&skip=${PAGE_SIZE * current}`;

//     async function dataFetch() {
//         let res = await fetch(url);
//         let hotelsData = await res.json();

//         setTotalCount(hotelsData.count);
//         setData(hotelsData.data);
//     }

//     useEffect(() => {
//         dataFetch();
//     }, [current]);

//     let no_of_pages = Math.ceil(totalCount / PAGE_SIZE);

//     // --------- NEW FUNCTION ----------
//     function getPages() {
//         if (no_of_pages <= 3) {
//             return [...Array(no_of_pages).keys()];
//         }

//         if (current <= 1) {
//             return [0, 1];
//         }

//         if (current >= no_of_pages - 3) {
//             return [
//                 no_of_pages - 3,
//                 no_of_pages - 2,
//                 no_of_pages - 1,
//             ];
//         }

//         return [current, current + 1];
//     }

//     const pages = getPages();

//     return (
//         <>
//             {/* Hotels */}

//             <div
//                 style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "30px",
//                 }}
//             >
//                 {data.map((el, index) => (
//                     <Product
//                         key={index}
//                         name={el.name}
//                         thumbnail={el.thumbnail}
//                         des={el.description}
//                         location={el.location}
//                         rating={el.rating}
//                         price={el.price}
//                     />
//                 ))}
//             </div>

//             {/* Pagination */}

//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     gap: "10px",
//                     margin: "30px",
//                     flexWrap: "wrap",
//                 }}
//             >
//                 {/* Previous */}
//                 <button disabled={current === 0} onClick={() => setCurrent(current - 1)}>Previous</button>

//                 {pages.map((page) => (
//                     <button key={page} onClick={() => setCurrent(page)} style=
//                         {{
//                             backgroundColor: current === page ? "dodgerblue" : "white",
//                             color: current === page ? "white" : "black", padding: "8px 15px", border: "1px solid gray", cursor: "pointer"
//                         }}> {page + 1}
//                     </button>
//                 ))}

//                 {/* Dots */}
//                 {pages[pages.length - 1] < no_of_pages - 3 && (
//                     <span>.....</span>
//                 )}

//                 {/* Second Last Page */}
//                 {!pages.includes(no_of_pages - 2) && (
//                     <button onClick={() => setCurrent(no_of_pages - 2)}style=
//                         {{
//                             backgroundColor:current === no_of_pages - 2? "dodgerblue": "white",
//                             color:current === no_of_pages - 2? "white" : "black",padding: "8px 15px",border: "1px solid gray",cursor: "pointer",
//                         }}> {no_of_pages - 1}
//                     </button>
//                 )}

//                 {/* Last Page */}
//                 {!pages.includes(no_of_pages - 1) && (
//                     <button onClick={() => setCurrent(no_of_pages - 1)}style=
//                         {{
//                             backgroundColor:current === no_of_pages - 1? "dodgerblue" : "white",
//                             color:current === no_of_pages - 1? "white" : "black",padding: "8px 15px",border: "1px solid gray",cursor: "pointer",
//                         }}> {no_of_pages}
//                     </button>
//                 )}

//                 {/* Next */}
//                 <button disabled={current === no_of_pages - 1} onClick={() => setCurrent(current + 1)}>Next</button>
//             </div>
//         </>
//     );
// }

// export function Product({
//     name,
//     thumbnail,
//     des,
//     location,
//     rating,
//     price,
// }) {
//     return (
//         <div
//             style={{
//                 display: "flex",
//                 gap: "20px",
//                 border: "2px solid white",
//                 padding: "30px",
//                 borderRadius: "30px",
//             }}
//         >
//             <div>
//                 <img
//                     width="300px"
//                     height="250px"
//                     src={thumbnail}
//                     alt=""
//                 />
//             </div>

//             <div
//                 style={{
//                     display: "flex",
//                     gap: "20px",
//                     flexDirection: "column",
//                     textAlign: "left",
//                 }}
//             >
//                 <h2>{name}</h2>

//                 <p>{des.slice(0, 200)}...</p>

//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                     }}
//                 >
//                     <p>Location : {location}</p>

//                     <p>
//                         <StarRating rating={rating} />
//                     </p>
//                 </div>

//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                     }}
//                 >
//                     <p>Price : {price}</p>

//                     <button
//                         style={{
//                             backgroundColor: "white",
//                             color: "black",
//                             border: "none",
//                             padding: "10px 20px",
//                         }}
//                     >
//                         Move to WishList
//                     </button>
//                 </div>
//             </div>  
//         </div>
//     );
// }

// function StarRating({ rating }) {
//     let stars = [];

//     for (let i = 1; i <= Math.ceil(rating); i++) {
//         stars.push(<IoStarSharp key={i} color="yellow" />);
//     }

//     return stars;
// }