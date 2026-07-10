import CarModel from "./CarModel";
import CarName from "./CarName";
import CarPrice from "./carPrice";
import CarRating from "./CarRating";

export default function Car({name,price,model,ratings}){
    console.log(name,price,model,ratings)
    return(
        <div style={{border:"2px solid white",width:"400px",display:"flex",flexDirection:"column",margin:"auto"}}>
            {/* Transferring data */}
            <CarName name={name}/>
            <CarPrice price={price}/>
            <CarModel model={model}/>
            <CarRating ratings={ratings}/>
        </div>
    )
}