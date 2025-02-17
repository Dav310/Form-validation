import React from 'react'
import './FormStyle.css'
import { useFormik } from 'formik';
import { signUpSchema } from '../Schemas/Schemas';




const inputValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}


const form = () => {
    
        const {values, errors , touched, handleBlur , handleChange , handleSubmit} = useFormik({
            initialValues: inputValue,
            validationSchema : signUpSchema,
            onSubmit: (values, action) => {
                console.log("values", values);
                
                action.resetForm();

            }
        });

        // console.log("Error", errors);


    return (
        <div>
            <div className='container'>
                <div className='Form-container'>
                    {/* Text */}
                    <div className="heading">
                        <h1>Welcome!</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {/* Input Form */}
                        <div>
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                placeholder='Name'
                                name='name'
                                id='name'
                                className='input-block'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name ? 
                            (<p className='error-input'>{errors.name}</p>)
                            : null }
                        </div>

                        {/* Email */}
                        <label htmlFor="email"></label>
                        <div>
                            <input
                                type="text"
                                placeholder='E-mail'
                                name='email'
                                id='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ?
                            (<p className='error-input'>{errors.email}</p>)
                            : null }
                        </div>

                        {/* Password */}
                        <label htmlFor="password"></label>
                        <div>
                            <input
                                type="Password"
                                placeholder='Password'
                                name='password'
                                id='password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? 
                            (<p className='error-input'>{errors.password}</p>)
                            : null }
                        </div>

                        {/* Conirm Password */}
                        <label htmlFor="confirmPassword"></label>
                        <div>
                            <input
                                type="password"
                                placeholder='Confirm Password'
                                name='confirmPassword'
                                id='confirmPassword'
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.confirmPassword && touched.confirmPassword ? 
                            (<p className='error-input'>{errors.confirmPassword}</p>)
                            : null }
                        </div>

                        <div className='btn-section'>
                            <button type='Submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default form
