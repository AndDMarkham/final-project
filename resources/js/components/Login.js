import React, { useState, useEffect } from 'react';

const Login = props => {
    const [ loginInfo, setLoginInfo ] = useState({
        email: '',
        password: '',
    });
    const [ alert, setAlert ] = useState({
        message: '',
        style: {}
    })

    const handleFormChange = e => {
        const id = e.target.id
        const value = e.target.value
        setLoginInfo(prev => {
            return {
              ...prev,
              [id]: value
            }
        })
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        
        async function postLogin() {
            const response = await fetch('http://www.eatanywhere.test:8080/api/login', {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            responseType: 'json',
            body: JSON.stringify({
                'email': loginInfo.email,
                'password': loginInfo.password 
            }),
            })
            const data = await response.json();

            console.log(data);

            if (data.error) {
                setAlert({
                    message: data.error,
                    style: {color: 'red'}
                });
            } else if (data.token) {
                props.setUser({
                    loggedIn: true,
                    token: data.token,
                    user: data.user
                })
                setAlert({
                    message: 'You\'ve been logged in successfully',
                    style: {color: 'green'}
                })
                window.localStorage.setItem('token', data.token);
            }
        }

        try {
            postLogin();

        } catch (e) {
            console.log('errors', e)
        }
    }

    return (
        <>
            <h1>eatAnywhere</h1>
            <div className="login">
                <h2>Login</h2>
                <h4 style={alert.style}>{ alert.message }</h4>
                <form action="" method="post" onSubmit={ handleFormSubmit }>
                    Email:<br />
                    <input id="email" type="text" name="email" 
                        value={ loginInfo.email } 
                        onChange={ handleFormChange } 
                    /><br />
                    Password:<br />
                    <input id="password" type="password" name="password" 
                        value={ loginInfo.password } 
                        onChange={ handleFormChange }
                    /><br />
                    <input type="submit" value="Log in" />
                </form>
                <a href="">Register Here</a>
            </div>
        </>
    )
}

export default Login;