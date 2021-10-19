import React from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
const SignUp = () => {
    const { user, handleCreateEmailPassword } = useFirebase();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        handleCreateEmailPassword(data.email, data.password, data.name);
    };
    return (
        <div className='p-5'>
            <form className='text-danger' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='text-danger' placeholder='name' {...register("name", { required: true })} />
                <br />
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

export default SignUp;