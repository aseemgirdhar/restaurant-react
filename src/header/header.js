import header from './header.css'
import {useHistory} from "react-router-dom";
import {useState} from "react";

const Header = (props) => {
    let history = useHistory()
    const [searchTerm, setSearchTerm] = useState('');
    const logout = async (e) => {
        e.preventDefault()
        let logoutUrl = 'https://foodbukka.herokuapp.com/api/v1/auth/logout';
        let data = await fetch(logoutUrl).then(res => res.json());
        if(data.status === 'success') {
            localStorage.clear();
            history.push('/login');
        }

    }
    const search = (e) => {
        e.preventDefault();
      console.log(e)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/dashboard">Aseem</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex pull-right ">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <button className="btn btn-danger logout " type="submit" onClick={logout}>Logout</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Header;