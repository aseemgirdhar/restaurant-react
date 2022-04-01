import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err , setErr] = useState('')
    let history = useHistory();
    useEffect(() => {
        localStorage.getItem('user-details');
        if (localStorage.getItem("user-details") !== null) {
            history.push(`/dashboard`);
        }
    },[])
    const login = async (e) => {
        e.preventDefault();
        let item = {username, password};
        let err = [];
        let result = await fetch('https://foodbukka.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        result = await result.json();
        if(result.status === 'success') {
            localStorage.setItem('user-details', JSON.stringify(result));
            history.push(`/dashboard`);
        } else if(result.status !== 'success') {
            setErr(result.error)

        }

        }
        const forgotPassword = () => {
            history.push(`/forget-password`);
        }

    return (
        <div className="col-md-4 col-md-offset-4" id="login">
            <section id="inner-wrapper" className="login">
                <article>
                    <form>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"> </i></span>
                                <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="username" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-key"> </i></span>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" autoComplete="current-password" />
                            </div>
                        </div>
                        <span className='err'>{err} </span>
                        <div className='login-forgot'> <span onClick={forgotPassword}> Forgot Password ?</span></div>
                        <div className="d-grid gap-5 mt-3">
                            <button type="submit" className="btn btn-success btn-block" onClick={login}>Login</button>
                        </div>


                    </form>
                </article>
            </section>
        </div>

    )
}
export default Login;