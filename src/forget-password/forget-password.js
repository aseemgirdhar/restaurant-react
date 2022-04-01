import {useEffect, useState} from "react";
// import {useHistory} from "react-router-dom";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    // let history = useHistory();
    /*useEffect(() => {
        localStorage.getItem('user-details')
    },[])*/
    const reset = async (e) => {
        e.preventDefault();
        let item = {email};
        let result = await fetch('https://foodbukka.herokuapp.com/api/v1/auth/forgotpassword', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        result = await result.json();
        console.log(result);
        /*localStorage.setItem('user-details', JSON.stringify(result));
        if(result.status === 'success') {
            history.push(`/dashboard`);
        }*/

    }

    return (
        <div className="col-md-4 col-md-offset-4" id="login">
            <section id="inner-wrapper" className="login">
                <article>
                    <form>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
                                <input type="email" onChange={(e) =>  setEmail(e.target.value)} className="form-control" placeholder="Email Address"/>
                            </div>
                        </div>
                        {/*<div className='login-forgot'> <span onClick={forgotPassword}>Forgot Password ?</span></div>*/}
                        <div className="d-grid gap-5 mt-3">
                            <button type="submit" className="btn btn-success btn-block" onClick={reset}>Reset Password</button>

                        </div>
                    </form>
                </article>
            </section>
        </div>
    )

}
export default ForgetPassword;