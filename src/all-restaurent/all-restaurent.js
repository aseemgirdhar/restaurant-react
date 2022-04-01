import {useEffect, useState} from "react";
import allrestaurent from './all-restaurent.css'

import {Link} from "react-router-dom";

const AllRestaurent = () => {
    const [restaurant, setRestaurant] = useState([]);

    const getAllRestaurant = async () => {
        let url = 'https://foodbukka.herokuapp.com/api/v1/restaurant';
         await fetch(url).then(res => res.json()).then(restaurant => setRestaurant(restaurant.Result));

    }

    useEffect(() => {
        getAllRestaurant();
    },[])
    return (
        <div className='card-wrapper main'>
        {restaurant.map((rest) =>
            <Link to={`/single/${rest._id}`} key={rest._id}>
            <div className="card">
                <img src={rest.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{rest.businessname}</h5>
                        <p className="card-text">{rest.location}</p>
                        <div className="d-grid gap-2">
                            <button className="btn btn-success btn-block">More</button>
                        </div>

                    </div>
            </div>
            </Link>

            )}
        </div>
    )
}
export default AllRestaurent;