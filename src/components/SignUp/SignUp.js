import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const SignUp = () => {
    const { user, handleCreateEmailPassword, handleGoogleSignIn } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        handleCreateEmailPassword(data.email, data.password, data.name);
    };
    return (
        <div style={{ minHeight: '100vh' }} className='d-flex container  justify-content-center align-items-center'>
            <form style={{ backgroundColor: "#ffffff1f" }} className=' rounded text-danger  p-4 w-50  ' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-pink fw-light'>Sign up</h1>
                {/* register your input into the hook by invoking the "register" function */}
                <input style={{ borderColor: '#ff00c9' }} className=' w-100  rounded px-3 my-4 py-2 border-1 bg-transparent' placeholder='name' {...register("name", { required: true })} />
                <br />
                <input style={{ borderColor: '#ff00c9' }} className=' w-100   rounded px-3 my-4 py-2 border-1 bg-transparent' placeholder='Email' {...register("email", { required: true })} />
                <br />

                {/* include validation with required or other standard HTML validation rules */}
                < input style={{ borderColor: '#ff00c9' }} className=' w-100   rounded px-3 my-4 py-2 border-1 bg-transparent' placeholder='password' {...register("password", { pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/ })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>enter valid pass</span>}
                <br />

                <input style={{ borderColor: '#ff00c9' }} className=' w-100  rounded px-3 my-4 py-2 border-1 bg-transparent' value='Sign Up' type="submit" />
                <NavLink className='text-danger  d-block  mt-4 text-center' to='/login'>Already have Account?</NavLink>
            </form>
        </div>
    );
};

export default SignUp;