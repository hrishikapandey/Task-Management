import React from 'react'
import Form from '../components/Form'
import { useState } from 'react'

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [error, setError] = useState({
        name: false,
        email:false,
        password: false,
        confirmPassword: false
    })

    const formFields =[
        {
            name:'name',
            type:'text',
            placeholder:'Enter your name',
            value: formData.name,
            onChange: (e) => {
                setFormData({ ...formData, name: e.target.value })
            }
        },
        {
            name:'email',
            type:'email',
            placeholder:'Enter your email',
            value: formData.email,
            onChange: (e) => {
                setFormData({ ...formData, email: e.target.value })
            }
        },
        {
            name:'password',
            type:'password',
            placeholder:'Enter your password',
            value: formData.password,
            onChange: (e) => {
                setFormData({ ...formData, password: e.target.value })
            }
        },
        {
            name:'confirmpassword',
            type:'password',
            placeholder:'confirm your password',
            value: formData.confirmPassword,
            onChange: (e) => {
                setFormData({ ...formData, confirmPassword: e.target.value })
            }

        }
    ]

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log(errorMessages["name"].isValid);
        Object.keys(errorMessages).forEach(keys => {
            if(!errorMessages[key].isValid){
                errorMessages[key].onError();
            }
        })
    }
    
    const errorMessages = {
        name: {
            message: "Name is required",
            isValid: formData.name.length > 0,
            onError: () => {
                setError((error) =>({ ...error, name: true }))
            }
        },
        email: {
            message: "email is required",
            isValid: formData.email.length > 0,
            onError: () => {
                setError((error)=>({ ...error, email: true }))
            }
        },
        password: {
            message: "Password is required",
            isValid: formData.password.length > 0,
            onError: () => {
                setError((error)=>({ ...error, password: true }))
            }
        },
        confirmpassword: {
            message: "Password does not match",
            isValid: formData.confirmPassword.length === formData.password,
            onError: () => {
                setError((error)=>({ ...error, confirmPassword: true }))
            }
        }

    }
  return (
    <>
    <h1>Register</h1>      
    <Form error={error} formFields={formFields} onSubmit= {onSubmit} errorMessages={errorMessages}/>
    </>
  )
}
