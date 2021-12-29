import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


function Login({setIsLoggedIn, setUser}) {
    let history = useHistory();

    const blankFormData = {username: "", password: ""}
    const [formData, setFormData] = useState(blankFormData);    

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        logIn(formData);
        setFormData(blankFormData)
    }

    function logIn (data) {
        fetch('/login',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(data)
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => {
                setUser(user);
                localStorage.setItem("isLoggedIn", true);
                setIsLoggedIn(true)
                console.log(user);
            });
          } 
          else {
            r.json().then((err) => console.log(err.errors));
          }
        })
        .catch(error => console.log("Log in incorrect: ", error))
      }

    return (
        <div className='container'>
            <br /><h1 className='form-title'>Login</h1>
            <div className='container outside'>
                <div className='container inside'>
                    <form className='container form' onSubmit={handleSubmit}>
                        <div className='fields'>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label className="col-form-label label"><span>Username</span></label>
                                </div>
                                <div className="col-auto">
                                    <input 
                                        id="username-login" 
                                        className="form-control input"
                                        size="50" 
                                        aria-describedby="usernameHelpInline" 
                                        placeholder="Username"
                                        name="username" 
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            &nbsp; &nbsp;
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label className="col-form-label label"><span> Password  </span></label>
                                </div>
                                <div className="col-auto ">
                                    <input 
                                        id="password-login"
                                        className="form-control input"
                                        size="50"
                                        aria-describedby="passwordHelpInline"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        value={formData.password}    
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        <div className="submit d-grid gap-2 d-md-block">
                            <button type="submit" className="btn btn-primary bttn bttn2">Login</button>
                        </div>
                    </form>
                    {/* ask Chaim or Billy on how to do pop up error messages. Setup validations for all forms */}
                    {/* {errors ? (
                        <Message error header={errors} content="Please sign in again" />
                    ) : null} */}
                </div>
            </div>
        </div>
    )
}

export default Login