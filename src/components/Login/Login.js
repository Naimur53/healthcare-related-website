
import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, handleSignInWithEmailPassword } = useFirebase();
    const onSubmit = data => {
        handleSignInWithEmailPassword(data.email, data.password);

    };
    console.log(user);

    return (
        <div>
            <h2>log in </h2>
            <form className='text-danger' onSubmit={handleSubmit(onSubmit)}>
                <input className='text-danger' placeholder='Email' {...register("email", { required: true })} />
                <br />

                {/* include validation with required or other standard HTML validation rules */}
                < input className='text-danger' placeholder='password' {...register("password", { pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/ })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>enter valid pass</span>}
                <br />

                <input className='text-danger' value='submit' type="submit" />
            </form>
        </div>
    );
};

export default Login;