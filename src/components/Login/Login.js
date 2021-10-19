
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, handleSignInWithEmailPassword, error, setUser, handleGoogleSignIn, setLoading, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    const onSubmit = data => {
        handleSignInWithEmailPassword(data.email, data.password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                history.push(redirectUrl);
                setLoading(false);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    };
    const handleLoginWithGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                setUser(result.user);
                history.push(redirectUrl);
                // ...
            }).catch((error) => {
                // Handle Errors here. 
                const errorMessage = error.message;
                setError(errorMessage);
                // ...
            });
    }
    console.log(user);
    console.log(error);
    console.log(location.state?.from);
    return (
        <div style={{ minHeight: '100vh' }} className='d-flex container  justify-content-center align-items-center'>
            <form style={{ backgroundColor: "#ffffff1f" }} className=' rounded text-danger  p-4 w-50  ' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='fw-light text-pink'>Log in </h2>
                <input style={{ borderColor: '#ff00c9' }} className=' w-100   rounded px-3 my-4 py-2 border-1 bg-transparent' placeholder='Email' type='email' {...register("email", { required: true })} />
                <br />
                {errors.email && <span className='text-danger d-inline-block mb-3'>Enter valid email</span>}
                <br />
                < input style={{ borderColor: '#ff00c9' }} className='w-100  rounded px-3 mb-4 py-2 border-1 bg-transparent' placeholder='password' {...register("password", { pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/ })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.password && <span className='text-danger  d-inline-block mb-2 '>enter valid pass</span>}
                <br />

                <input style={{ borderColor: '#ff00c9' }} className=' w-100 text-white rounded px-3  py-2 border-1 bg-transparent' value='Log In' type="submit" />
                {
                    error && <h5 className='text-danger py-4'>{error}</h5>
                }
                <NavLink className='text-danger d-block fs-5  mt-4 text-center' to='/signup'>Don't have account?</NavLink>
                <button onClick={handleLoginWithGoogle} className='btn btn-primary  d-block  mt-4  mx-auto'>Google Sign In</button>
            </form>
        </div>
    );
};

export default Login;