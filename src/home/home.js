import home from './home.css'
import Header from "../header/header";
import AllRestaurent from "../all-restaurent/all-restaurent";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const Home = () => {
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("user-details") === null) {
            history.push(`/login`);
        }
    })
    return (
        <>
            <Header />
            <AllRestaurent />
        </>
    )
}
export default Home