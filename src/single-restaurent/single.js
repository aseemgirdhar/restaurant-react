import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import single from './single.css'
import Header from "../header/header";
const Single = () => {
    let { id } = useParams();
    const [restaurant, setRestaurant] = useState({});

    const [allmenu, setAllMenu] = useState([]);

    const getSingleProduct = async () => {
        const response = await fetch(`https://foodbukka.herokuapp.com/api/v1/restaurant/${id}`);
        const data = await response.json();
        setRestaurant(data.data)

    }

    const getAllMenu = async () => {
        const allM = await fetch('https://foodbukka.herokuapp.com/api/v1/menu');
        const allMenuData = await allM.json();
        setAllMenu(allMenuData.Result);
    }


    useEffect(() =>{
        getAllMenu();
        getSingleProduct();

    },[])
    return (
        <>
            <Header />
        <div className='main'>
            <div className='single-card-wrapper'>
                <div className='single-card-img'><img src={restaurant.image} /> </div>
                <div className='card-details'>
                    <div className='hotel-name'>
                        <strong><i className="fa fa-hotel"></i> {restaurant.businessname}</strong>
                        <span>Avg Cost: {restaurant.averagecost}</span>
                    </div>
                    <p><i className="fa fa-user" aria-hidden="true"></i> Restaurant Type: {restaurant.restauranttype}</p>
                    <p><i className="fa fa-mobile"></i> Restaurant Contact: {restaurant.phone}</p>
                    <p><i className="fa fa-address-card" aria-hidden="true"></i> Address: {restaurant.address}, {restaurant.location}</p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i> Email: {restaurant.email}</p>
                </div>
            </div>

            <div className='card-wrapper single-menu'>
                <h2>Menu</h2>
                {allmenu.map((menu) =>
                    <div className="card">
                        <div className='multi-img'>
                            <img src={menu.images[0]} className="card-img-top" alt="..." />
                            <img src={menu.images[1]} className="card-img-top" alt="..." />
                            <img src={menu.images[2]} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">

                            <h5 className="card-title">{menu.menuname}</h5>
                            <p className="card-text">{menu.description}</p>


                        </div>
                    </div>
                )}
                </div>
        </div>

        </>
    )
}
export default Single;