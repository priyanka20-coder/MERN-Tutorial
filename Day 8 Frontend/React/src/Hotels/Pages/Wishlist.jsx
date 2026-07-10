import { useDispatch, useSelector } from "react-redux"
import { FaLocationArrow } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { removeFromWish } from "../Redux/Slicer/WishlistSlicer";

export default function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist.value)
    console.log(wishlist)

    let naviagate=useNavigate()
    
    const dispatch=useDispatch()
    
    return (
        <>
            <h1>Wishlist</h1>

            <div style={{
                display: "flex",
                flexWrap:"wrap",
                justifyContent:"center",
                gap: "30px",
            }}>
                {
                    wishlist.map((el) => (
                        <div
                            key={el.id}
                            style={{
                                width: "300px",
                                padding: "30px 10px",
                                border:"2px dashed black",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px"
                            }}>
                            <img  onClick={()=>{
                                naviagate(`/detail/${el.id}`)
                            }} style={{borderRadius:"50px"}} width="300px" src={el.thumbnail} alt="" />

                            <h2 onClick={()=>{
                                naviagate(`/detail/${el.id}`)
                            }}>{el.name}</h2>

                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <p>Price: {el.price}</p>
                                <p><FaLocationArrow /> {el.location}</p>
                            </div>

                            <button style={{padding:"20px 0px",backgroundColor:"#111735",color:"white",fontSize:"18px",
                                borderRadius:"50px",border:"none"}}
                                onClick={()=>{
                                    dispatch(removeFromWish(el.id))
                                }}>Remove from Wishlist
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}