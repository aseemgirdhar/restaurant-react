import signup from './signup.css'
import {useState} from "react";
import {useHistory} from "react-router-dom";



const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [err , setErr] = useState('')
    let history = useHistory();

    const register = async (e) => {
        e.preventDefault();
        let item = {username, password, email, phone};
        let result = await fetch('https://foodbukka.herokuapp.com/api/v1/auth/register', {
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
            history.push(`/login`);
        } else if(result.status !== 'success') {
            setErr(result.error)

        }


    }
    const redirectToLogin = () => {
        history.push(`/login`);
    }
    return (
        <div id="login">
            <section id="inner-wrapper" className="login">
                <article>
                    <form>
                        <h3 className='text-center mb-3 text-uppercase'>Sign Up</h3>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"> </i></span>
                                <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="username" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
                                <input type="email" onChange={(e) =>  setEmail(e.target.value)} className="form-control" placeholder="Email Address"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-key"> </i></span>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" autoComplete="current-password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-phone"> </i></span>
                                <input type="text" onChange={(e) =>  setPhone(e.target.value)} className="form-control" placeholder="Phone Number" />
                            </div>
                        </div>
                        <span className='err'>{err} </span>

                        <div className='login-forgot'><span onClick={redirectToLogin}>Click to login</span></div>
                        <div className="d-grid gap-5 mt-3">
                            <button className="btn btn-primary" type="button" onClick={register}>Sign Up</button>
                        </div>
                    </form>
                </article>
            </section>
        </div>

    )
}
export default Signup;